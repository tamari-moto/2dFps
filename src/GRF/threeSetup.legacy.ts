import * as THREE from "three";
import { OrbitControls } from "three-stdlib";
import { Vector3 } from "three";
import { State, GameEvent } from './StateMachine';
import { Model } from '../MODEL/model';
import { gsap } from "gsap";
import { PlayerConfig, EnemyConfig, NodeConfig, AnimationConfig, CameraConfig, ObstacleConfig } from '../config/GameConfig';
import { ENTITY_IDS, KEYBOARD_KEYS, PLAYER_CONSTANTS, ENEMY_CONSTANTS } from '../config/GameConstants';
import { ViewAngleVisualizer } from './ViewAngleVisualizer';

export class ThreeSetup {
  private canvas: HTMLCanvasElement;

  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private orbitControls: OrbitControls;
  private raycaster: THREE.Raycaster;
  private player_next: THREE.Mesh<THREE.CircleGeometry, THREE.MeshBasicMaterial>;
  private player_shot: THREE.Mesh<THREE.CircleGeometry, THREE.MeshBasicMaterial>;
  private player_select: THREE.Mesh<THREE.CircleGeometry, THREE.MeshBasicMaterial>;
  private undefinedMesh: THREE.Mesh<THREE.CircleGeometry, THREE.MeshBasicMaterial>;
  private meshList: THREE.Mesh<THREE.CircleGeometry, THREE.MeshBasicMaterial>[];
  private playerMeshes: Map<string, THREE.Mesh>;
  private enemyMeshes: Map<string, THREE.Mesh>;

  private meshid_to_nodeid: Map<number, number>;
  private nodeid_to_meshid: Map<number, number>;
  private activePlayerId: string;
  private activeEnemyId: string;
  private readonly model: Model;
  private viewAngleVisualizer: ViewAngleVisualizer;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.meshList = [];
    this.player_next= new THREE.Mesh(new THREE.CircleGeometry(), new THREE.MeshBasicMaterial());
    this.player_shot= new THREE.Mesh(new THREE.CircleGeometry(), new THREE.MeshBasicMaterial());
    this.player_select= new THREE.Mesh(new THREE.CircleGeometry(), new THREE.MeshBasicMaterial());
    this.undefinedMesh = new THREE.Mesh(new THREE.CircleGeometry(), new THREE.MeshBasicMaterial());

    const width = window.innerWidth; canvas.clientWidth;
    const height = window.innerHeight; canvas.clientHeight;

    this.renderer = new THREE.WebGLRenderer({ canvas: canvas });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(width, height);
    this.renderer.setClearColor(0x000000);

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(CameraConfig.FOV, 1.0);
    this.camera.aspect = width / height;
    this.camera.position.set(0, 0, CameraConfig.InitialZPosition);
    this.camera.updateProjectionMatrix();

    this.orbitControls = new OrbitControls(this.camera, canvas);
    this.orbitControls.target = new Vector3(0, 0, 0);
    this.orbitControls.minDistance = CameraConfig.MinDistance;
    this.orbitControls.maxDistance = CameraConfig.MaxDistance;
    this.orbitControls.enableRotate = CameraConfig.EnableRotate;

    this.raycaster = new THREE.Raycaster();

    this.playerMeshes = new Map();
    this.enemyMeshes = new Map();

    this.meshid_to_nodeid = new Map();
    this.nodeid_to_meshid = new Map();
    this.model = new Model();
    this.activePlayerId = PLAYER_CONSTANTS.DEFAULT_ACTIVE_PLAYER;
    this.activeEnemyId = ENEMY_CONSTANTS.DEFAULT_ACTIVE_ENEMY;
    this.viewAngleVisualizer = new ViewAngleVisualizer(this.scene);

    this.API_Init();
    this.glRender();

    // Initialize player meshes
    for (const [playerId, player] of this.model.players) {
      const mesh = this.API_setPlayer(player.color);
      this.playerMeshes.set(playerId, mesh);
      player.stateMachine.transition(GameEvent.SelectPlayer);
    }

    // Initialize enemy meshes
    for (const [enemyId, enemy] of this.model.enemies) {
      const mesh = this.API_setEnemy(enemy.color);
      this.enemyMeshes.set(enemyId, mesh);
    }

    canvas.addEventListener('click', this.onCanvasClick.bind(this), false);
    window.addEventListener('keydown', this.onKeyDown.bind(this), false);
  }

  private API_Init() {
    for (const node of this.model.nodeList) {
      let tmp = this.API_setCircle(node.x, node.y, NodeConfig.CircleSize).id;
      this.meshid_to_nodeid.set(tmp, node.id);
      this.nodeid_to_meshid.set(node.id, tmp);
    }

    // 障害物判定
    for (const line of this.model.Lines) {
      this.API_setLineSegment(line.start.x, line.start.y, line.end.x, line.end.y);
    }
    this.updateView();
  }

  private updateView() {
    const activePlayer = this.model.getPlayer(this.activePlayerId);
    if (!activePlayer) return;

    // Update all enemy positions and visibility
    for (const [enemyId, enemy] of this.model.enemies) {
      const mesh = this.enemyMeshes.get(enemyId);
      if (mesh) {
        mesh.visible = false;
        gsap.to(mesh.position, {
          x: enemy.node.x,
          y: enemy.node.y,
          duration: AnimationConfig.MovementDuration,
        });
        // Highlight active enemy with a different scale
        if (enemyId === this.activeEnemyId) {
          mesh.scale.set(ENEMY_CONSTANTS.ACTIVE_SCALE, ENEMY_CONSTANTS.ACTIVE_SCALE, ENEMY_CONSTANTS.ACTIVE_SCALE);
        } else {
          mesh.scale.set(ENEMY_CONSTANTS.NORMAL_SCALE, ENEMY_CONSTANTS.NORMAL_SCALE, ENEMY_CONSTANTS.NORMAL_SCALE);
        }
      }
    }

    // Update all player positions
    for (const [playerId, player] of this.model.players) {
      const mesh = this.playerMeshes.get(playerId);
      if (mesh) {
        gsap.to(mesh.position, {
          x: player.node.x,
          y: player.node.y,
          duration: AnimationConfig.MovementDuration,
        });
        // Highlight active player with a different brightness or scale
        if (playerId === this.activePlayerId) {
          mesh.scale.set(PLAYER_CONSTANTS.ACTIVE_SCALE, PLAYER_CONSTANTS.ACTIVE_SCALE, PLAYER_CONSTANTS.ACTIVE_SCALE);
        } else {
          mesh.scale.set(PLAYER_CONSTANTS.NORMAL_SCALE, PLAYER_CONSTANTS.NORMAL_SCALE, PLAYER_CONSTANTS.NORMAL_SCALE);
        }
      }
    }

    this.meshList.map((mesh) => {
      mesh.material.color.setHex(NodeConfig.DefaultColor);
    });
    if (this.player_shot !== undefined) {
      this.player_shot.material.color.setHex(NodeConfig.ShotTargetColor);
    }

    // Draw view angle edges using the visualizer
    this.viewAngleVisualizer.draw(activePlayer.node, activePlayer.angle);

    for (const nodeA of this.model.getVisibleNodesAtAngle(activePlayer.node, activePlayer.angle, PlayerConfig.MaxViewDistance)) {
      let mesh = this.meshList.find(mesh => this.meshid_to_nodeid.get(mesh.id) == nodeA.id);
      if (mesh !== undefined) {
        mesh.material.color.setHex(NodeConfig.VisibleColor);
      }

      // Check if any enemies are visible at this node
      for (const [enemyId, enemy] of this.model.enemies) {
        if (enemy.node.id === nodeA.id) {
          const enemyMesh = this.enemyMeshes.get(enemyId);
          if (enemyMesh) {
            enemyMesh.visible = true;
          }
        }
      }
    }

    if (this.player_select !== undefined) {
      this.player_select.material.color.setHex(NodeConfig.SelectedColor);
    }
    if (this.player_next !== undefined) {
      this.player_next.material.color.setHex(NodeConfig.NextMoveColor);
    }
    if (this.player_shot !== undefined) {
      this.player_shot.material.color.setHex(NodeConfig.ShotTargetColor);
      gsap.fromTo(
        this.player_shot.scale,
        { x: 1, y: 1 },
        {
          x: AnimationConfig.ShotPulseScale,
          y: AnimationConfig.ShotPulseScale,
          duration: AnimationConfig.ShotPulseDuration,
          yoyo: true,
          repeat: 1,
          repeatDelay: AnimationConfig.ShotPulseRepeatDelay,
          ease: AnimationConfig.ShotPulseEase,
          overwrite: "auto",
        }
      );
    }
  }


  private API_setCircle(x: number, y: number, size: number) {
    const geometry2 = new THREE.CircleGeometry(size, NodeConfig.CircleSegments).center();
    const material2 = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const circle = new THREE.Mesh(geometry2, material2);
    this.scene.add(circle);
    this.meshList.push(circle);
    circle.position.set(x, y, 0);
    return circle;
  }

  private API_setLineSegment(x1: number, y1: number, x2: number, y2: number) {
    const material = new THREE.LineBasicMaterial({ color: ObstacleConfig.LineColor });
    const points = [];
    points.push(new THREE.Vector3(x1, y1, 0));
    points.push(new THREE.Vector3(x2, y2, 0));
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material);
    this.scene.add(line);
  }

  private API_setPlayer(color: number = 0xffff00) {
    const geometry = new THREE.BoxGeometry(PlayerConfig.CubeSize, PlayerConfig.CubeSize, PlayerConfig.CubeSize);
    const material = new THREE.MeshBasicMaterial({ color: color });
    const tmp = new THREE.Mesh(geometry, material);
    this.scene.add(tmp);
    return tmp;
  }

  private API_setEnemy(color: number = 0xff0000) {
    const geometry = new THREE.BoxGeometry(EnemyConfig.CubeSize, EnemyConfig.CubeSize, EnemyConfig.CubeSize);
    const material = new THREE.MeshBasicMaterial({ color: color });
    const tmp = new THREE.Mesh(geometry, material);
    this.scene.add(tmp);
    return tmp;
  }


  private glRender() {
    this.orbitControls.update();
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.glRender.bind(this));
  }

  private getIntersects(mouseEvent: MouseEvent): THREE.Intersection<THREE.Object3D<THREE.Object3DEventMap>>[] {
    const width = this.canvas.clientWidth;
    const height =  this.canvas.clientHeight;
    const x = mouseEvent.offsetX / width * 2.0 - 1.0;
    const y = mouseEvent.offsetY / height * 2.0 - 1.0;
    let mouse = new THREE.Vector2(x, -y);
    this.raycaster.setFromCamera(mouse, this.camera);
    return this.raycaster.intersectObjects(this.meshList);
  }

  /**
   * Handles keyboard input for toggling view angle edges and switching players/enemies
   * @param event - Keyboard event
   */
  private onKeyDown(event: KeyboardEvent) {
    // Toggle view angle edges with 'V' key
    if (event.key === KEYBOARD_KEYS.TOGGLE_VIEW_ANGLE || event.key === KEYBOARD_KEYS.TOGGLE_VIEW_ANGLE_UPPER) {
      const isVisible = this.viewAngleVisualizer.toggle();
      this.updateView();
      console.log(`View angle edges: ${isVisible ? 'ON' : 'OFF'}`);
    }
    // Switch between players with '1', '2', etc.
    else if (event.key === KEYBOARD_KEYS.SELECT_PLAYER_1) {
      this.activePlayerId = ENTITY_IDS.PLAYER_1;
      console.log('Switched to Player 1 (Yellow)');
      this.updateView();
    }
    else if (event.key === KEYBOARD_KEYS.SELECT_PLAYER_2) {
      this.activePlayerId = ENTITY_IDS.PLAYER_2;
      console.log('Switched to Player 2 (Green)');
      this.updateView();
    }
    // Switch between enemies with '3', '4', etc.
    else if (event.key === KEYBOARD_KEYS.SELECT_ENEMY_1) {
      this.activeEnemyId = ENTITY_IDS.ENEMY_1;
      console.log('Switched to Enemy 1 (Red)');
      this.updateView();
    }
    else if (event.key === KEYBOARD_KEYS.SELECT_ENEMY_2) {
      this.activeEnemyId = ENTITY_IDS.ENEMY_2;
      console.log('Switched to Enemy 2 (Orange)');
      this.updateView();
    }
  }

  private onCanvasClick(mouseEvent: MouseEvent) {
    const activePlayer = this.model.getPlayer(this.activePlayerId);
    if (!activePlayer) return;

    const sm = activePlayer.stateMachine;
    const intersects = this.getIntersects(mouseEvent);

    if (intersects.length > 0) {
      let mesh = intersects[0].object as THREE.Mesh<THREE.CircleGeometry, THREE.MeshBasicMaterial>;

      if (sm.getState() == State.Idle) {
        if (activePlayer.node.id == this.meshid_to_nodeid.get(mesh.id)) {
          sm.transition(GameEvent.SelectPlayer);
          this.player_select = mesh;
        }
      }
      else if (sm.getState() == State.Select) {
        if (activePlayer.node.id == this.meshid_to_nodeid.get(mesh.id)) {
          sm.transition(GameEvent.MovePlayer);
          this.player_next = mesh;
        }
        const nodeId = this.meshid_to_nodeid.get(mesh.id);
        if (nodeId !== undefined) {
          if (this.model.areNodesConnected(activePlayer.node, this.model.nodeList[nodeId])) {
            sm.transition(GameEvent.MovePlayer);
            this.player_next = mesh;
          }
        }
      }
      else if (sm.getState() == State.Move) {
        const A = this.meshid_to_nodeid.get(mesh.id)
        const B = this.meshid_to_nodeid.get(this.player_next.id)
        if ((B !== undefined) && (A !== undefined)) {
          const visibleNodes = this.model.getVisibleNodesAtAngle(this.model.nodeList[B], activePlayer.angle, PlayerConfig.MaxViewDistance);
          const isVisible = visibleNodes.some(n => n.id === A);
          if (isVisible) {
            sm.transition(GameEvent.ShotPlayer);
            this.player_shot = mesh;
          }
        }
      }
      else if (sm.getState() == State.Shot) {
        if (this.player_shot.id == mesh.id) {
          sm.transition(GameEvent.Complete);
          let tmp = this.meshid_to_nodeid.get(this.player_next.id)
          if (tmp !== undefined) {
            this.model.setPlayerRef(this.activePlayerId, this.model.nodeList[tmp]);
          }

          // Move all enemies randomly
          for (const [enemyId, enemy] of this.model.enemies) {
            const enemyEdges = this.model.Edges.List[enemy.node.id];
            if (enemyEdges && enemyEdges.length > 0) {
              const randomNodeId = enemyEdges[Math.floor(Math.random() * enemyEdges.length)];
              this.model.setEnemyRef(enemyId, this.model.nodeList[randomNodeId]);
            }
          }

          // Check if any enemy was hit
          const shotNodeId = this.meshid_to_nodeid.get(this.player_shot.id);
          let enemyHit = false;
          for (const [enemyId, enemy] of this.model.enemies) {
            if (shotNodeId === enemy.node.id) {
              console.log(`${this.activePlayerId} hit ${enemyId}!`);
              enemyHit = true;
              break;
            }
          }

          if (!enemyHit) {
            // Check if player is at an enemy's adjacent position (simple lose condition)
            for (const [enemyId, enemy] of this.model.enemies) {
              if (activePlayer.node.id === enemy.node.id) {
                console.log(`${this.activePlayerId} LOSE to ${enemyId}!`);
                break;
              }
            }
          }

          const player_next = this.meshid_to_nodeid.get(this.player_next.id)
          const tmpplayer_shot = this.meshid_to_nodeid.get(this.player_shot.id)
          if (player_next !== undefined && tmpplayer_shot !== undefined) {
            activePlayer.setAngle(this.model.getAngleBetweenNodes(this.model.nodeList[player_next], this.model.nodeList[tmpplayer_shot]));
          }
          sm.transition(GameEvent.SelectPlayer);
          this.player_select = this.player_next;
          this.player_next = this.undefinedMesh;
          this.player_shot = this.undefinedMesh;
        }
        else {
          const A = this.meshid_to_nodeid.get(mesh.id)
          const B = this.meshid_to_nodeid.get(this.player_next.id)
          if ((B !== undefined) && (A !== undefined)) {
            const visibleNodes = this.model.getVisibleNodesAtAngle(this.model.nodeList[B], activePlayer.angle, PlayerConfig.MaxViewDistance);
            const isVisible = visibleNodes.some(n => n.id === A);
            if (isVisible) {
              sm.transition(GameEvent.ShotPlayer);
              this.player_shot = mesh;
            }
          }
        }
      }
    }
    if (intersects.length == 0) {
      sm.transition(GameEvent.Cancel);
      this.player_shot = this.undefinedMesh;
      this.player_next = this.undefinedMesh;
      sm.transition(GameEvent.SelectPlayer);
    }
    this.updateView();
  }

  // モデルへのアクセスメソッド
  public getModel(): Model {
    return this.model;
  }

  /**
   * Updates obstacle line segments in the scene.
   * Removes old obstacle lines and adds new ones based on current model state.
   */
  private updateObstaclesInScene(): void {
    // Remove existing obstacle line segments from scene
    const linesToRemove: THREE.Line[] = [];
    this.scene.traverse((object) => {
      if (object instanceof THREE.Line) {
        linesToRemove.push(object);
      }
    });
    linesToRemove.forEach(line => this.scene.remove(line));

    // Add new obstacle line segments to scene
    for (const line of this.model.Lines) {
      this.API_setLineSegment(line.start.x, line.start.y, line.end.x, line.end.y);
    }

    // Update the view
    this.updateView();
  }

  /**
   * Regenerates obstacles randomly and updates the scene
   */
  public regenerateObstacles(): void {
    // Generate new random obstacles in the model
    this.model.generateRandomObstacles();

    // Update the scene with new obstacles
    this.updateObstaclesInScene();
  }

  /**
   * Imports obstacles from obstacle data and updates the scene
   * @param obstaclesData - Array of obstacle data to import
   */
  public importObstacles(obstaclesData: import('../MODEL/ObstacleExporter').ObstacleData[]): void {
    // Import obstacles in the model
    this.model.importObstacles(obstaclesData);

    // Update the scene with new obstacles
    this.updateObstaclesInScene();
  }

  /**
   * Generates a complex map and updates the scene
   */
  public generateComplexMap(): void {
    // Generate complex map in the model
    this.model.generateComplexMap();

    // Update the scene with new obstacles
    this.updateObstaclesInScene();
  }
}

export function setupThree(canvas: HTMLCanvasElement): ThreeSetup {
  return new ThreeSetup(canvas);
}
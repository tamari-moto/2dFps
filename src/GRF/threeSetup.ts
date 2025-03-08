import * as THREE from "three";
import { OrbitControls } from "three-stdlib";
import { Vector3 } from "three";
import { StateMachine, State, GameEvent } from './StateMachine';
import { Model } from '../MODEL/model';
import { gsap } from "gsap";

export class ThreeSetup {
  private canvas: HTMLCanvasElement;

  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private oribitControls: OrbitControls;
  private raycaster: THREE.Raycaster;
  private player_next: THREE.Mesh<THREE.CircleGeometry, THREE.MeshBasicMaterial>;
  private player_shot: THREE.Mesh<THREE.CircleGeometry, THREE.MeshBasicMaterial>;
  private player_select: THREE.Mesh<THREE.CircleGeometry, THREE.MeshBasicMaterial>;
  private Undefind_Mesh: THREE.Mesh<THREE.CircleGeometry, THREE.MeshBasicMaterial>;
  private meshList: THREE.Mesh<THREE.CircleGeometry, THREE.MeshBasicMaterial>[];
  private playercube: THREE.Mesh;
  private emenycube: THREE.Mesh;

  private meshid_to_nodeid: Map<number, number>;
  private nodeid_to_meshid: Map<number, number>;
  private player_Angle: number;
  private sm: StateMachine;
  private readonly model: Model;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.meshList = [];
    this.player_next= new THREE.Mesh(new THREE.CircleGeometry(), new THREE.MeshBasicMaterial());
    this.player_shot= new THREE.Mesh(new THREE.CircleGeometry(), new THREE.MeshBasicMaterial());
    this.player_select= new THREE.Mesh(new THREE.CircleGeometry(), new THREE.MeshBasicMaterial());
    this.Undefind_Mesh = new THREE.Mesh(new THREE.CircleGeometry(), new THREE.MeshBasicMaterial());

    const width = window.innerWidth; canvas.clientWidth;
    const height = window.innerHeight; canvas.clientHeight;

    this.renderer = new THREE.WebGLRenderer({ canvas: canvas });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(width, height);
    this.renderer.setClearColor(0x000000);

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(90, 1.0);
    this.camera.aspect = width / height;
    this.camera.position.set(0, 0, 10);
    this.camera.updateProjectionMatrix();

    this.oribitControls = new OrbitControls(this.camera, canvas);
    this.oribitControls.target = new Vector3(0, 0, 0);
    this.oribitControls.minDistance = 2.0;
    this.oribitControls.maxDistance = 1000.0;
    this.oribitControls.enableRotate = false;

    this.raycaster = new THREE.Raycaster();

    this.playercube = this.API_setPlayer();
    this.emenycube = this.API_setEmenyc();

    this.sm = new StateMachine();
    this.meshid_to_nodeid = new Map();
    this.nodeid_to_meshid = new Map();
    this.model = new Model();
    this.player_Angle = 0;

    this.API_Init();
    this.glRender();
    this.sm.transition(GameEvent.SelectPlayer);
    canvas.addEventListener('click', this.onCanvasClick.bind(this), false);
  }

  private API_Init() {
    for (const node of this.model.nodeList) {
      let tmp = this.API_setCircle(node.x, node.y, 10).id;
      this.meshid_to_nodeid.set(tmp, node.id);
      this.nodeid_to_meshid.set(node.id, tmp);
    }

    // 障害物判定
    for (const line of this.model.Lines) {
      this.API_setLineSegment(line.start.x, line.start.y, line.end.x, line.end.y);
    }
    this.API_Veiw();
  }

  private API_Veiw() {
    this.emenycube.visible = false;
    gsap.to(this.emenycube.position, {
      x: this.model.emeny.x,
      y: this.model.emeny.y,
      duration: 1,
    });
    gsap.to(this.playercube.position, {
      x: this.model.player.x,
      y: this.model.player.y,
      duration: 1,
    });

    this.meshList.map((mesh) => {
      mesh.material.color.setHex(0xA0A0A0);
    });
    if (this.player_shot !== undefined) {
      this.player_shot.material.color.setHex(0xff0000);
    }


 

    for (const nodeA of this.model.getConnectedNodesAtAngle(this.model.player, this.player_Angle, 1000)) {
      let mesh = this.meshList.find(mesh => this.meshid_to_nodeid.get(mesh.id) == nodeA.id);
      if (mesh !== undefined) {
        mesh.material.color.setHex(0xffffff);
      }

      if (this.model.emeny.id == nodeA.id) {
        this.emenycube.visible = true;
      }
    }

    if (this.player_select !== undefined) {
      this.player_select.material.color.setHex(0x0000ff);
    }
    if (this.player_next !== undefined) {
      this.player_next.material.color.setHex(0x00ff00);
    }
    if (this.player_shot !== undefined) {
      this.player_shot.material.color.setHex(0xff0000);
      gsap.fromTo(
        this.player_shot.scale,
        { x: 1, y: 1 },
        {
          x: 1.3,
          y: 1.3,
          duration: 0.5,
          yoyo: true,
          repeat: 1,
          repeatDelay: 0.02,
          ease: "elastic.out(1, 0.3)", // プルンプルン跳ねる
          overwrite: "auto",
        }
      );
    }
  }


  private API_setCircle(x: number, y: number, size: number) {
    const geometry2 = new THREE.CircleGeometry(size, 100).center();
    const material2 = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const circle = new THREE.Mesh(geometry2, material2);
    this.scene.add(circle);
    this.meshList.push(circle);
    circle.position.set(x, y, 0);
    return circle;
  }

  private API_setLineSegment(x1: number, y1: number, x2: number, y2: number) {
    const material = new THREE.LineBasicMaterial({ color: 0x00ffff });
    const points = [];
    points.push(new THREE.Vector3(x1, y1, 0));
    points.push(new THREE.Vector3(x2, y2, 0));
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material);
    this.scene.add(line);
  }

  private API_setPlayer() {
    const geometry = new THREE.BoxGeometry(10, 10, 10);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const tmp = new THREE.Mesh(geometry, material);
    this.scene.add(tmp);
    return tmp;
  }

  private API_setEmenyc() {
    const geometry2 = new THREE.BoxGeometry(10, 10, 10);
    const material2 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const tmp = new THREE.Mesh(geometry2, material2);
    this.scene.add(tmp);
    return tmp;
  }


  private glRender() {
    this.oribitControls.update();
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

  private onCanvasClick(mouseEvent: MouseEvent) {
    const intersects = this.getIntersects(mouseEvent);
    if (intersects.length > 0 ) {
      let mesh = intersects[0].object as THREE.Mesh<THREE.CircleGeometry, THREE.MeshBasicMaterial>;
      if (this.sm.getState() == State.Idle) {
        if (this.model.player.id == this.meshid_to_nodeid.get(mesh.id)) {
          this.sm.transition(GameEvent.SelectPlayer);
          this.player_select = mesh;
        }
      }
      else if (this.sm.getState() == State.Select) {
        if (this.model.player.id == this.meshid_to_nodeid.get(mesh.id)) {
          this.sm.transition(GameEvent.MovePlayer);
          this.player_next = mesh ;
        }
        const nodeId = this.meshid_to_nodeid.get(mesh.id);
        if (nodeId !== undefined) {
          if(this.model.areNodesConnected(this.model.player, this.model.nodeList[nodeId])){
            this.sm.transition(GameEvent.MovePlayer);
            this.player_next = mesh ;
          }
        }
      }
      else if (this.sm.getState() == State.Move) {
        const A =this.meshid_to_nodeid.get(mesh.id)
        const B =this.meshid_to_nodeid.get(this.player_next.id)
        if ((B !== undefined) && (A !== undefined)) {
          if(this.model.areNodesConnected(this.model.nodeList[B], this.model.nodeList[A])){
            this.sm.transition(GameEvent.ShotPlayer);
            this.player_shot = mesh;
          }
        }
      }
      else if (this.sm.getState() == State.Shot) {
        if (this.player_shot.id == mesh.id) {
          this.sm.transition(GameEvent.Complete);
          let tmp = this.meshid_to_nodeid.get(this.player_next.id)
          if (tmp !== undefined) {
            this.model.setPlayerRef(this.model.nodeList[tmp]);
          }

          tmp = this.model.Edges.List[this.model.emeny.id][Math.floor(Math.random() * this.model.Edges.List[this.model.emeny.id].length)];
          if (tmp !== undefined) {
            this.model.setEmenyRef(this.model.nodeList[tmp]);
          }

          if (this.meshid_to_nodeid.get(this.player_shot.id) == this.model.emeny.id) {
            console.log("WIN");
          } else if (this.model.player == this.model.nodeList[this.model.Edges.List[this.model.emeny.id][Math.floor(Math.random() * this.model.Edges.List[this.model.emeny.id].length)]]) {
            console.log("LOSE");
          }
          const player_next = this.meshid_to_nodeid.get(this.player_next.id)
          const tmpplayer_shot = this.meshid_to_nodeid.get(this.player_shot.id)
          if (player_next !== undefined&&tmpplayer_shot !== undefined) {
            this.player_Angle = this.model.getAngleBetweenNodes(this.model.nodeList[player_next],this.model.nodeList[tmpplayer_shot]);
          }
          this.sm.transition(GameEvent.SelectPlayer);
          this.player_select = this.player_next;
          this.player_next = this.Undefind_Mesh;
          this.player_shot = this.Undefind_Mesh;
        } 
        else {
          const A =this.meshid_to_nodeid.get(mesh.id)
          const B =this.meshid_to_nodeid.get(this.player_next.id)
          if ((B !== undefined) && (A !== undefined)) {
            if(this.model.areNodesConnected(this.model.nodeList[B], this.model.nodeList[A])){
              this.sm.transition(GameEvent.ShotPlayer);
              this.player_shot = mesh;
            }
          }
        }
      }
    }
    if (intersects.length == 0) {
      this.sm.transition(GameEvent.Cancel);
      this.player_shot = this.Undefind_Mesh;
      this.player_next = this.Undefind_Mesh;
      this.sm.transition(GameEvent.SelectPlayer);
    }
    this.API_Veiw();
  }
}

export function setupThree(canvas: HTMLCanvasElement) {
  new ThreeSetup(canvas);
}
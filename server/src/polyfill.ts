// @colyseus/schema@4.x requires Symbol.metadata (TC39 decorator standard).
// Node.js < 22 doesn't define it natively.
// This file must be the FIRST import in index.ts so it runs before any schema module.
(Symbol as unknown as Record<string, symbol>).metadata ??= Symbol.for('Symbol.metadata');

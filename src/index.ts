async function f() {
  const c = await import("@canvas-js/chain-ethereum");
  console.log(c.SIWESigner.name);

  const j2 = await import ("@ipld/dag-json");
  console.log(j2.encode({ hello: "canvas" }));
}

f();

async function f() {
  const j2 = await import ("@ipld/dag-json");
  console.log(j2.encode({ hello: "canvas" }));
}

f();

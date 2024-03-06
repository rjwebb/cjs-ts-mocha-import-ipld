const asyncImport = (packageName: string) => eval(`(async () => await import('${packageName}'))()`);

it('something', async () => {
  const { expect } = await asyncImport("chai");
  const ipldDagJson = await asyncImport('@ipld/dag-json');

  const data = { hello: "canvas" };
  const stringData = ipldDagJson.stringify(ipldDagJson.encode(data))
  const parsedData = ipldDagJson.decode(ipldDagJson.parse(stringData));
  expect(parsedData).to.be.deep.equal(data);
});

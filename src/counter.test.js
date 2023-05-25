import fakeComments from './modules/fakeComments.js';
import counterComments from './modules/counterComment.js';

describe('test for the counter comment function', () => {
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(fakeComments),
  }));

  it('passes if items are 25  ', async () => {
    const responses = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fUbqF1yL645NYNB2lPxl/comments?item_id=${139}`);
    const responseFromApis = await responses.json();

    const datas = await counterComments(responseFromApis);
    expect(datas.length).toBe(25);
  });

  it('passes if no items  ', async () => {
    const datas = await counterComments({});
    expect(datas).toBe(0);
  });
});
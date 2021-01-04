import RemoteAuthentication from './remote-authentication';
import { HttpPostClientSpy } from '../../test/mock-http-client';

describe('RemoteAuthentication', () => {
  it('should call HtppPostClient with correct URL', async () => {
    const httpPostClientSpy = new HttpPostClientSpy();
    const url = 'any_url';
    const sut = new RemoteAuthentication(url, httpPostClientSpy);
    await sut.auth();

    expect(httpPostClientSpy.url).toBe(url);
  });
});

import { HttpPostClient } from '../../protocols/http/http-post-client';
import RemoteAuthentication from './remote-authentication';

describe('RemoteAuthentication', () => {
  it('should call HtppPostClient with correct URL', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string;

      async post(url: string): Promise<void> {
        this.url = url;
        return Promise.resolve();
      }
    }

    const httpPostClientSpy = new HttpPostClientSpy();
    const url = 'any_url';
    const sut = new RemoteAuthentication(url, httpPostClientSpy);
    await sut.auth();

    expect(httpPostClientSpy.url).toBe(url);
  });
});

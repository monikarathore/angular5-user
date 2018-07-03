import { SearchListConfigLoader } from '../src/public_api';
import {
  DefaultConfigLoader,
  WIDGET_CONFIG
} from '../src/services/config-loader.service';
import { TestBed, async, inject } from '@angular/core/testing';

describe('Config Loader Service', () => {
  const SearchListingServiceURL = 'https://dev-document/document';
  const config = { url: SearchListingServiceURL, clientid: 'clientid' };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: SearchListConfigLoader,
          useClass: DefaultConfigLoader
        },
        {
          provide: WIDGET_CONFIG,
          useValue: config
        }
      ],
      imports: []
    });
  });
  it('should construct', async(
    inject([SearchListConfigLoader], (service, backend) => {
      expect(service).toBeDefined();
    })
  ));
  it('should get config', async(
    inject([SearchListConfigLoader], (service, backend) => {
      service.getConfig().subscribe((t) => {
        expect(t).toBeDefined();
        expect(t.url).toBe(config.url);
        expect(t.clientid).toBe(config.clientid);
      });
    })
  ));
});

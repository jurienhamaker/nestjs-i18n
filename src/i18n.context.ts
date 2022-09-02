import { I18nValidationError } from './interfaces/i18n-validation-error.interface';
import { I18nService, TranslateOptions } from './services/i18n.service';

export class I18nContext {
  constructor(readonly lang: string, readonly service: I18nService) {}

  public translate<T = any>(key: string, options?: TranslateOptions): T {
    options = {
      lang: this.lang,
      ...options,
    };
    return this.service.translate<T>(key, options);
  }

  public t<T = any>(key: string, options?: TranslateOptions): T {
    return this.translate<T>(key, options);
  }

  public validate(
    value: any,
    options?: TranslateOptions,
  ): Promise<I18nValidationError[]> {
    options = {
      lang: this.lang,
      ...options,
    };
    return this.service.validate(value, options);
  }
}

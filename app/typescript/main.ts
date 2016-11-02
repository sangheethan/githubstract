import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

// Bootstrapping
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
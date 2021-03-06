import { PageHeaderModule } from '@delon/abc/page-header';
import { ResultModule } from '@delon/abc/result';
import { ReuseTabModule } from '@delon/abc/reuse-tab';
import { SEModule } from '@delon/abc/se';
import { STModule } from '@delon/abc/st';
import { SVModule } from '@delon/abc/sv';
import { DelonACLModule } from '@delon/acl';

export const SHARED_DELON_MODULES = [PageHeaderModule, STModule, SEModule, SVModule, ResultModule, ReuseTabModule, DelonACLModule];

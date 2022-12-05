import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-push',
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class PushComponent {

  push(){
    console.log("push")
  }
}

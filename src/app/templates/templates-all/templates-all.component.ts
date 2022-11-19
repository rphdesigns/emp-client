import { Component } from '@angular/core';
import { ConfigService } from "../../_services/config.service";

@Component({
  selector: 'app-templates-all',
  templateUrl: './templates-all.component.html',
  styleUrls: ['./templates-all.component.scss']
})
export class TemplatesAllComponent {
  templates: any;

  constructor(private configService: ConfigService){}

  ngOnInit(): void {
    this.getTemplates();
  }

  getTemplates(){
    this.configService.getTemplates(this.templates).subscribe(templates => {
      this.templates = templates;
    }, error => {
      console.log(error);
    });
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {BlockService} from '../block.service';
import {Property} from '../../../contracts/src/property';
import {CreatePropertyRequest} from '../../../contracts/src/create.property.request';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  title = 'Create a boundary';

  @Input()
  property: CreatePropertyRequest;

  constructor(private blockService: BlockService) {
  }

  async onSubmit() {
    console.log('Creating new property');
    await this.blockService.createProperty(this.property);
    console.log('Created new property');
    this.property = null;
  }

  ngOnInit() {
  }

}

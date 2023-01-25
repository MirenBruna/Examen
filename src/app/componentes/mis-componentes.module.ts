import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreContainerComponent } from './explore-container/explore-container.component';
import { ProductoComponent } from './producto/producto.component';


@NgModule({
  declarations: [ExploreContainerComponent, ProductoComponent],
  imports: [CommonModule, IonicModule],
  exports: [ExploreContainerComponent, ProductoComponent]
})
export class MisComponentesModule { }

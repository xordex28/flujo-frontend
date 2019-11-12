import { Component, OnInit } from '@angular/core';
import { MigrateService } from '../migrate.service';
import { MatSelect } from '@angular/material';
@Component({
  selector: 'app-migrate',
  templateUrl: './migrate.component.html',
  styleUrls: ['./migrate.component.css']
})
export class MigrateComponent implements OnInit {
  schemas: [] = [];
  indexSchema: [] = [];
  seleccionado = '';


  archivos: Array<File>;
  indexFile: [] = [];
  dataFile: [] = [];

  formatingFile: { old: string, new: string }[] = [];
  dataFormating: {}[];
  constructor(private service: MigrateService) { }

  ngOnInit() {
    this.service.getSchemasDb().subscribe((res: []) => {
      this.schemas = res;
    }, (err) => {
      console.log(err);
    });
  }

  seleccionar(index: string) {
    this.service.getIndexShema(index).subscribe((res: []) => {
      console.log(res);
      this.indexSchema = res;
      this.seleccionado = index;
    }, (error) => {
      console.log(error);
    });
  }

  selectFile(param: File[]) {
    this.archivos = param;
  }

  sendFile() {
    const formData = new FormData();
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.archivos.length; i++) {
      formData.append('uploads[]', this.archivos[i], this.archivos[i].name);
    }
    this.service.getDataFile(formData).subscribe((res: { data: [], index: [] }) => {
      this.dataFile = res.data;
      this.indexFile = res.index;
    });
  }

  setChanges(indexS: number, indexA: number, combos?: MatSelect[]) {
    if (indexS > (-1) && indexA > (-1)) {
      console.log(indexS, indexA);
      this.formatingFile.push({
        new: this.indexSchema[indexS]['key'],
        old: this.indexFile[indexA]['key']
      });
      Object.assign(this.indexSchema[indexS], { disabled: true });
      Object.assign(this.indexFile[indexA], { disabled: true });
      if (combos) {
        combos.forEach((combo) => {
          combo.options.forEach((mat, i) => {
            if (i === 0) {
              mat.select();
            }
          });
        });
      }
    }
  }

  formatFile() {
    this.service.formatingData(this.dataFile, this.formatingFile).subscribe((format) => {
      this.dataFormating = format;
    });
  }

  saveFile() {
    this.service.saveData(this.seleccionado, this.dataFormating, 'username').subscribe((resp) => {
      console.log(resp);
    }, (error) => {
      console.log(error);
    });
  }
}

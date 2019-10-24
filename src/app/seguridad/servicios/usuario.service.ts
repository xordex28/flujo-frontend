import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API } from '../../utils/api';
import { Usuario } from './interface';
import { map, catchError, publishReplay, refCount } from 'rxjs/operators';
import { Observable, Observer, BehaviorSubject, config } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends API<Usuario> {
  protected URL = `${this.URL_API}segurity/user/`;
  // tslint:disable-next-line: variable-name
  private usuario_actual: BehaviorSubject<Usuario> = new BehaviorSubject(null);
  private $actual: Observable<Usuario>;

  // public isLoggedIn = false;

  constructor(
    protected http: HttpClient,
    private jwtHelperService: JwtHelperService
  ) {
    super(http);
  }
}

import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedService } from '../src/services/shared.service';
import { Injectable } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed } from '@angular/core/testing';
import { expand } from 'rxjs/operator/expand';

describe('SharedService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SharedService],
            imports: []
        });
    });

    it('should be created', inject([SharedService], (service: SharedService) => {
        expect(service).toBeTruthy();
    }));

    it('shoud get Stoken and client Id', inject([SharedService], (service: SharedService) => {
        service.setStoken('test');
        service.setClientId('test');
        expect(service.getClientId()).toBe('test');
        expect(service.getStoken()).toBe('test');

    }));

});


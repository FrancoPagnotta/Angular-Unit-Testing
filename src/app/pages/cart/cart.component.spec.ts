import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BookService } from 'src/app/services/book.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Book } from 'src/app/models/book.model';

const listBook: Book[] = [
  {
    name: '',
    author: '',
    isbn: '',
    price: 15,
    amount: 2
  },
  {
    name: '',
    author: '',
    isbn: '',
    price: 20,
    amount: 1
  },
  {
    name: '',
    author: '',
    isbn: '',
    price: 8,
    amount: 7
  },
];

describe('Cart Component', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  /**
   * @description
   * Run configurations before each test.
   */
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartComponent
      ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        BookService
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent); // Fixture extract the CartComponment from TestBed in line 15.
    component = fixture.componentInstance; // Instance of CartComponent created by fixture.
    fixture.detectChanges(); // Trigger the change detection cycle ngOnInit for the component CartComponent. Allow us to start the test from the ngOnInit.
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getTotalPrice return an amount', () => {
    const totalPrice = component.getTotalPrice(listBook);
    // expect(totalPrice).toBeGreaterThan(0);
    expect(totalPrice).not.toBe(0);
    expect(totalPrice).not.toBeNull();
  });
});

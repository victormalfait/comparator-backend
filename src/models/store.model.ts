import { Entity, model, property } from "@loopback/repository";

@model()
export class Store extends Entity {
  @property({
    type: "string",
    id: true,
    generated: false,
    required: false
  })
  id: number;

  @property({
    type: "string",
    required: true
  })
  name: string;

  @property({
    type: "number",
    required: true
  })
  company: number;

  @property({
    type: "string",
    required: true
  })
  address: string;

  @property({
    type: "string",
    required: true
  })
  city: string;

  @property({
    type: "number",
    required: true
  })
  zipcode: number;

  @property({
    type: "number",
    required: true
  })
  lat: number;

  @property({
    type: "number",
    required: true
  })
  lng: number;

  constructor(data?: Partial<Store>) {
    super(data);
  }
}

export interface StoreRelations {
  // describe navigational properties here
}

export type StoreWithRelations = Store & StoreRelations;

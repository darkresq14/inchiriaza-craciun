export interface Rental {
  id?: string;
  name: string;
}

export interface Mos extends Rental {
  type: 'mos';
}

export interface Ren extends Rental {
  type: 'ren';
}

export interface Elf extends Rental {
  type: 'elf';
}

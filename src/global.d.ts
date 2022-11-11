interface Section { 
  name: string;
  releaseDates: {
    retailOnline: Date;
    retailStore: Date;
    wholesale: Date;
    distributor: Date;
    professional: Date;
  }
  items: Item[];
}

interface Item {
  image: string;
  title: string;
  sku: string;
}
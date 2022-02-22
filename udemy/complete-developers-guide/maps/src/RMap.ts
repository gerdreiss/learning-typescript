interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class RMap {
  private googleMap: google.maps.Map;

  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(of: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: of.location.lat,
        lng: of.location.lng,
      },
    });
  }
}

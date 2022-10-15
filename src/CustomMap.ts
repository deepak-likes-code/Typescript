// Interface
interface Mappable {
    location: {
        lat: number;
        long: number
    };
    markerContent(): string
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        })
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.long
            }
        })

        const infoWindow = new google.maps.InfoWindow({
            content: mappable.markerContent()
        })

        marker.addListener('click', () => {
            infoWindow.open(this.googleMap, marker)
        })
    }
}

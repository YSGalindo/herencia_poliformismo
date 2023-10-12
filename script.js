class FiguraGeometrica {
    constructor(pAncho, pLargo, pRadio) {
        this.ancho = pAncho;
        this.largo = pLargo;
        this.radio = pRadio;
    }

    calcularArea() {
        console.log("Este método debe ser implementado en las clases hijas para calcular el área.");
    }

    calcularPerimetro() {
        console.log("Este método debe ser implementado en las clases hijas para calcular el perímetro.");
    }
}

class Circulo extends FiguraGeometrica {
    constructor(pRadio) {
        super(pRadio);  
    }

    calcularArea() {
        return 3.14 * this.radio * this.radio; 

    calcularPerimetro() {
        return 2 * 3.14 * this.radio;
    }
}

class Cuadrado extends FiguraGeometrica {
    constructor(pLado) {
        super(pLado, pLado);  
    }

    calcularArea() {
        return this.ancho * this.ancho;  
    }

    calcularPerimetro() {
        return 4 * this.lado;  
    }
}

class Rectangulo extends FiguraGeometrica {
    constructor(pAncho, pLargo) {
        super(pAncho, pLargo); 
    }

    calcularArea() {
        return this.ancho * this.largo;  
    }

    calcularPerimetro() {
        return 2 * (this.ancho + this.largo);  
    }
}

const medida_circulo = new Circulo(4);
console.log("Círculo - Área:", medida_circulo.calcularArea(), "Perímetro:", medida_circulo.calcularPerimetro());

const medida_cuadrado = new Cuadrado(2);
console.log("Cuadrado - Área:", medida_cuadrado.calcularArea(), "Perímetro:", medida_cuadrado.calcularPerimetro());

const medida_rectangulo = new Rectangulo(3, 5);
console.log("Rectángulo - Área:", medida_rectangulo.calcularArea(), "Perímetro:", medida_rectangulo.calcularPerimetro());

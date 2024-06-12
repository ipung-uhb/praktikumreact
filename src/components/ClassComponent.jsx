import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            hargaPerUnit: 12000000, // Assume each MacBook costs $2000
            discount: 0,
            totalHarga: 0
        };
    }

    calculateDiscount = (count) => {
        if (count > 10) {
            return 20;
        } else if (count > 5) {
            return 15;
        } else if (count > 3) {
            return 10;
        } else {
            return 0;
        }
    }

    handleInputChange = (event) => {
        const count = Number(event.target.value);
        const discount = this.calculateDiscount(count);
        const totalHarga = count * this.state.hargaPerUnit * (1 - discount / 100);
        this.setState({ count, discount, totalHarga });
    }
    render() {
        const containerStyle = {
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '5px'
        };

        return (
            <div style={containerStyle}>
                <h2>Kalkulator Penjualan Macbook</h2>
                <p>{this.props.info}</p>
                <input
                    type="number"
                    value={this.state.count}
                    onChange={this.handleInputChange}
                    placeholder="Enter number of units"
                />
                <p>Harga per Unit: Rp.{this.state.hargaPerUnit}</p>
                <p>Discount: {this.state.discount}%</p>
                <p>Total Harga: Rp{this.state.totalHarga.toFixed(2)}</p>
            </div>
        );
    }
}

export default ClassComponent;

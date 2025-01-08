class ResetButton {
    constructor() {
        this.onClick = this.onClick.bind(this);
    }
    render() {
        return makeButton({ text: 'Reset', onClick: this.onClick });
    }
    onClick() {
        alert(`Reset ${this}`);
    }
}
export default {};

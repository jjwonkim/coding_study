class ResetButton {
    render() {
        return makeButton({ text: 'Reset', onClick: this.onClick });
    }
    onClick() {
        alert(`Reset ${this}`);
    }
}
export default {};

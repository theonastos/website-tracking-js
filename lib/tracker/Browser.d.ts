export default class Browser implements IBrowser {
    fingerPrint(done: (browserComponents: IBrowserComponents) => void): void;
}

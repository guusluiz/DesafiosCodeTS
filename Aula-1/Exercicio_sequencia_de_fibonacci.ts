export function exercicioSequenciaDeFibonacci() {
    let pn: number = 0
    let sn: number = 1
    console.log(pn)
    console.log(sn)
    for (let contador:number = 3; contador <= 10; contador++) {
        let tn: number = pn + sn
        pn = sn
        sn = tn
        console.log(tn)
    }
}
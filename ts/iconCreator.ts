class iconCreator {
  private mcanvas: HTMLCanvasElement
  constructor(w:number) {
    this.mcanvas = document.createElement('canvas')
  }
  _createStar(n: number = 6) {
    let ctx = this.mcanvas.getContext('2d')
    if (ctx) {
      ctx.save()
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.translate(x, y)
      for (let i = 0; i < n; i++) {
        ctx.lineTo(Math.cos(((1 / 4 + i) * 2 * Math.PI / n)) * R, -Math.sin(((1 / 4 + i) * 2 * Math.PI / n)) * R)
        ctx.lineTo(Math.cos(((3 / 4 + i) * 2 * Math.PI / n)) * r, -Math.sin(((3 / 4 + i) * 2 * Math.PI / n)) * r)
      }
      ctx.closePath()
      ctx.stroke()
      ctx.restore()
    }
  }
}
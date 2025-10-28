const myPromise = new Promise<number>((resolve, reject)=>{
    setTimeout(()=>{
        resolve(1000);
        reject('No te voy a pagar');
        console.log('2 segundos despues ME PAGAS EL DINERO');
    }, 2000 /* 2 segundos*/);
});

myPromise.then((myMoney)=>{
    console.log(`Gracias por el dinero ${myMoney}`);
}).catch((reason)=>{
    console.warn(`No me diste dinero porque ${reason}`);
}).finally(()=>{
    console.log('Termino el promise');
});
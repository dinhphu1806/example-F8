// break & continue in Loop 
for(var i = 0; i < 10; i++) {
    console.log(i);
    if( i >= 5) {
        break; // i > 5 sẽ dừng lại
    }
}

// continue

for(i = 0; i < 10; i++) {
    if(i%2 !== 0) { // in các số chẵn
       continue;
    }
    console.log(i);
}
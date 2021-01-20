for (x of genBin(3))
{
	console.log((x.slice()).reverse())
}

function* genBin(n)
{
	let b = []
	for(let i = 0; i < n; i++) b.push(0)
	yield b
	let i = 0
	while(true)
	{
		if(i == n)	return
		else if( b[i] == 1)
		{
			b[i] = 0
			i++
		}
		else
		{
			b[i] = 1
			i = 0
			yield b
		}
	}
}
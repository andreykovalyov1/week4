const items = buildItems()
for (x of genPowerSet(items))
{
	console.log (x)
}


function* genPowerSet(items)
{
	for(let x of genBin(items.length))
	{
		let taken = []
		for (let i = 0; i < x.length; i++)
		{
			if (x[i] == 1) taken.push(items[i])
		}
		yield taken
	}
}



function* genBin(n)
{
	let b = []
	for(let i = 0; i < n; i++)
		b.push(0)
	yield b
	let i = 0
	while(true)
	{
		if(i == n)
		{
			return
		}
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

function buildItems()
{
	const names = ['часы', 'картина', 'радио', 'ваза', 'книга', 'компьютер']
	const values = [175, 90, 20, 50, 10, 200]
	const weights = [10, 9, 4, 2, 1, 20]
	const items = []
	for (let i = 0; i < values.length; i++)
	{
		items.push(
			{
			name:names[i],
			value: values[i],
			weight: weights[i]
			})
	}
	return items
}

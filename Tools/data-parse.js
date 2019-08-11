const parseTop50 = (data) => {
	let html = `<table cellspacing="0" cellpadding="0">
		<col width="66">
		<col width="173">
		<col width="66">`;
	for(let i=0; i< data.length; i++){
		html += `\n\t<tr>\n\t\t<td width="66">${data[i][0]}</td>`
		html += `\n\t\t<td width="173">${data[i][1]}</td>`
		html += `\n\t\t<td width="66">${data[i][2]}</td>\n\t</tr>`
	}
	html += `\n</table>`;
	console.log(html);
}

parseTop50Qualified = (data) => {
	let html = `<table cellspacing="0" cellpadding="0">
		<col width="66">
		<col width="173">
		<col width="66">
		<col width="66">`;
	for(let i=0; i< data.length; i++){
		html += `\n\t<tr>\n\t\t<td width="66">${data[i][0]}</td>`
		html += `\n\t\t<td width="173">${data[i][1]}</td>`
		html += `\n\t\t<td width="66">${data[i][2]}</td>`
		html += `\n\t\t<td width="66">${data[i][3]}</td>\n\t</tr>`
	}
	html += `\n</table>`;
	console.log(html);
}

Papa.parse(`Ranking,Name,Rating,Grade
1,"Shen, Christopher",2410,9
2,"Wang, Jason",2388,7
3,"Baker, Vincent",2327,10
4,"Feng, Maggie",2325,12
5,"Liu, Aristo",2269,10
6,"Cao, Elton Yutong",2256,9
7,"Storn, Justin",2226,10
8,"Keuchel, Destynn",2212,9
9,"Beatrez, Patrick",2184,12
10,"Tan, Ralph",2126,9
11,"Balyan, Aryan",2110,9
12,"Paganini, Xavier",2095,11
13,"Sampath, Aja",2090,8
14,"Keuchel, Brennen",2071,12
15,"Hart, Braeden",2051,11
16,"Liu, Alan",2012,12
17,"Padhye, Rohan",2007,5
18,"Suganraj, Brian",2006,11
19,"Ghosh, Shourjya",1953,11
20,"Zhou, James",1928,10
21,"Song, Hansen",1923,9
22,"Tan, Sean",1923,6
23,"Prasad, Arvind Sai",1919,10
24,"George, Adith",1918,9
25,"Cheng, Emma",1896,7
26,"Partee, Isaac",1894,12
27,"Orellana, Juan",1886,8
28,"Chen, Vincent",1881,10
29,"Lewicki, Phillip",1871,12
30,"Sathyajeeth, Varun",1856,7
31,"Liu, Edison",1834,5
32,"Huang, Evan",1823,9
33,"Kim, Dae San",1823,6
34,"Lin, Michael",1812,7
35,"Koebel, Jeremy",1810,12
36,"Borkar, Om",1794,11
37,"Dinesh, Abinav Sundar",1773,4
38,"Ferkins, Ethan",1772,9
39,"Raghukanth, Udbhav",1755,9
40,"Adury, Anant",1747,6
41,"Kallam, Karthik",1747,8
42,"Annamreddi, Chaitanya",1741,11
43,"Yang, Cody",1722,9
44,"Wojnar, Nicholas",1719,8
45,"Schirokauer, Leo",1718,12
46,"Adury, Abhay Kumar",1715,10
47,"Bojja, Dinesh",1709,9
48,"Ma, Samantha",1707,11
49,"Chen, Ethan",1704,5
50,"Pisini, Dakshin",1702,9`, {
	complete: function(results) {
		console.log("Finished:", results.data);
		// parseTop50(results.data);
		parseTop50Qualified(results.data);
	}
});


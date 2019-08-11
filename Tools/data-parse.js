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
};

const parseTop50Qualified = (data) => {
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
};

const parseOcaMembers = (data) => {
	let html = `<table xmlns="http://www.w3.org/1999/xhtml" cellspacing="0" cellpadding="0" dir="ltr" border="1">
	<colgroup>
	  <col width="197"/>
	  <col width="100"/>
	  <col width="100"/>
	  <col width="100"/>
	  <col width="100"/>
	  <col width="100"/>
	  <col width="100"/>
	  <col width="100"/>
	  <col width="160"/>
	  <col width="100"/>
	  </colgroup>
	<tbody>`;
	for(let i=0; i< data.length; i++){
		html += `\n\t<tr>\n\t\t<td width="197">${data[i][0]}</td>`
		html += `\n\t\t<td width="100">${data[i][1]}</td>`
		html += `\n\t\t<td width="100">${data[i][2]}</td>`
		html += `\n\t\t<td width="100">${data[i][3]}</td>`
		html += `\n\t\t<td width="100">${data[i][4]}</td>`
		html += `\n\t\t<td width="100">${data[i][5]}</td>`
		html += `\n\t\t<td width="100">${data[i][6]}</td>`
		html += `\n\t\t<td width="100">${data[i][7]}</td>`
		html += `\n\t\t<td width="160">${data[i][8]}</td>`
		html += `\n\t\t<td width="100">${data[i][9]}</td>\n\t</tr>`
	}
	html += `\n</tbody>\n</table>`;
	console.log(html);
};

Papa.parse(`Last,First,Expiration,USCF,City,ST,Zip,District,County,Trustee
Ananiadis,Constantine,1/1/2020,12604384,Wellington,OH,44090,Two,Lorain County,Calvin Marshall
Andreas,Peter,1/1/2021,10391989,Cleveland,OH,44101,Two,Cuyahoga County,Calvin Marshall
Antonucci,David,1/1/2020,12902559,Columbus,OH,43207,Seven,Franklin,Steve Charles
Atlantic Chess News,,1/31/2020,,Moris Plains,NJ,7950,Out of State,NJ,Out of State
Ault,Anna,1/1/2020,14534232,Canton,OH,44709,Five,Stark,Joe Yun
Babai,Cyrus,1/1/2020,16841338,Columbus,OH,43235,Seven,Franklin,Steve Charles
Back,Larry,1/1/2020,12404729,Middletown,OH,45042,Nine,Butler County,John Miller
Bagley,Hemma,1/1/2020,15282566,Akron,OH,44313,Five,Summit County,Joe Yun
Bagley,Kalanithi,1/1/2020,,Akron,OH,44313,Five,Summit County,Joe Yun
Bagley,Saadhika,1/1/2020,15827114,Akron,OH,44313,Five,Summit County,Joe Yun
Bagnall,Walter,1/1/2020,12529713,Chillicothe,OH,45601,Ten,Ross County,John Kay
Balyan,Aryan,1/1/2020,15273590,New Albany,OH,43054,Seven,Franklin County,Steve Charles
Basalla,Robert,1/1/2020,10258995,Berea,OH,44017,Two,Cuyahoga County,Calvin Marshall
Bath,John,1/1/2020,11312853,Gahanna,OH,43230,Seven,Franklin County,Steve Charles
Behnen,William,Lifetime,10274125,Cincinnati,OH,45241,Nine,Hamilton County,John Miller
Berlin,Aaron,1/1/2020,13438373,Cleveland,OH,44102,Two,Cuyahoga County,Calvin Marshall
Blaine,Roger,Lifetime,,Osceola,IN,46561,Out of State,IN,Out of State
Blatz,Anna,1/1/2020,14534232,Canton,OH,44709,Five,Stark County,Joe Yun
Blocker,Calvin,Lifetime,10262160,Cleveland,OH,44120,Two,Cuyahoga County,Calvin Marshall
Boone,Robert / Susan,Lifetime,,Pataskala,OH,43062,Seven,Licking County,Steve Charles
Brackenridge,Keith,1/1/2020,12559520,Mason,OH,45040,Nine,Warren County,John Miller
Brackenridge,Kyle,1/1/2020,,,,,,,
Brightwood Chess Association,,1/1/2020,,Painesville,OH,44077-2180,Two,Lake County,Calvin Marshall
Calpin,Donald C,1/1/2021,12686302,Westerville,OH,43082,Four,Delaware County,Eric Gittrich
Cannon,David,1/1/2020,16122361,St. Clairsville,OH,43950,Eight,Belmont County,David Cannon
Cao,Elton,1/1/2020,14619034,Dayton,OH,45458,Six,Montgomery County,Kel Utendorf
Cao,Evan,1/1/2020,,,,,,,
Cao,Kenneth,1/1/2020,15885082,West Chester,OH,45069,Nine,Butler County,John Miller
Charles,Steve,1/1/2020,10255929,Galloway,OH,43119,Seven,Franklin County,Steve Charles
Cheng,Emma,1/1/2020,14989783,Columbus,OH,43235,Seven,Franklin County,Steve Charles
Chenault,Robert,1/1/2020,12468958,Auburn,CA,95603,,,
Cretsos,Alex,1/1/2020,14687082,Troy,OH,45373,Six,Miami County,Kel Utendorf
Kim,Dae San,1/1/2020,15015721,North Olmsted,OH,44070,Two,Cuyahoga County,Mike Joelson
Davis,Jeffrey,1/1/2020,14823963,Cincinnati,OH,45213,Nine,Hamilton County,John Miller
Dayton Chess Club,,1/1/2025,A6011637,Dayton,OH,45402,Six,Montgomery County,Kel Utendorf
Demetruk,David,1/1/2020,10266955,Mcdonald,OH,44437,Five,Trumbull County,Joe Yun
Diebert,Chuck,1/1/2020,10269181,Columbus,OH,43224,Seven,Franklin County,Steve Charles
Docter,Quentin,1/1/2020,12553291,Loveland,OH,45140,Nine,Clermont County,John Miller
Driver,Riley,1/1/2025,10227640,Dayton,OH,45402,Six,Montgomery County,Kel Utendorf
Driver,Sharon,1/1/2025,12700245,Dayton,OH,45402,Six,Montgomery County,Kel Utendorf
Dulam,sai Khushal,1/1/2020,16325381,Westerville,OH,43081,Seven,Franklin County,Steve Charles
En Passant Chess,,1/31/2020,,Coraopolis,PA,15108,Out of State,PA,Out of State
Feng,Maggie,1/1/2020,14105448,Dublin,OH,43016,Seven,Franklin County,Steve Charles
Ferkins,David,1/1/2020,16023015,Upper Arlington,OH,43221,Seven,Franklin County,Steve Charles
Ferkins,Ethan,1/1/2020,14960486,Upper Arlington,OH,43221,Seven,Franklin County,Steve Charles
Franklin,William,1/1/2020,12429014,Riverside,OH,45431,Six,Greene County,Kel Utendorf
Friedman,David,1/1/2020,12488564,Kettering,OH,45440,Six,Greene County,Kel Utendorf
Frithiof,Michael,1/1/2020,12578921,Columbus,OH,43230,Seven,Franklin County,Steve Charles
Fronczak,Wayne B.,Lifetime,,Troy,OH,45373,Six,Miami County,Kel Utendorf
Frye,Russ,1/1/2020,13220876,Columbus,OH,43235,Seven,Franklin County,Steve Charles
Galupo,Peter,1/1/2020,14553280,Westerville,OH,43081,Seven,Franklin County,Steve Charles
Gardner,Paul,1/1/2021,12688700,Columbus,OH,432143305,Seven,Franklin County,Steve Charles
Gilman,Gershon,1/1/2020,14301702,Cleveland,OH,44106,Two,Cuyahoga County,Calvin Marshall
Gittrich,Eric L,1/1/2020,12656948,Columbus,OH,43205,Seven,Franklin County,Steve Charles
Glaser,Art,Lifetime,,Brecksville,OH,44141,Two,Cuyahoga County,Calvin Marshall
Griggs,Walker,1/1/2020,14079634,Mount Vernon,OH,43050,Four,Knox County,Eric Gittrich
Hansbrough,Mike,Lifetime,12726824,Incinnati,OH,45227,Nine,Hamilton County,John Miller
Harkema,Scott,1/1/2020,16862026,Columbus,OH,43202,Seven,Franklin County,Steve Charles
Harkins,Jim,Lifetime,,Shaker Hts.,OH,44120,Two,Cuyahoga County,Calvin Marshall
Hayes,Richard,1/1/2021,13615045,Bethesda,OH,43719,Eight,Belmont County,David Cannon
Hodge,Alan,1/1/2020,12620838,Loveland,OH,45140,Nine,Clermont County,John Miller
Hoffman,John,Lifetime,,Columbus,OH,43202-3161,Seven,Franklin County,Steve Charles
Huang,Evan,1/1/2020,14965613,Columbus,OH,43221,Seven,Franklin County,Steve Charles
Hughes,John,1/1/2020,13381704,Columbus,OH,43235,Seven,Franklin County,Steve Charles
Joelson,Michael,1/1/2020,12051880,Cleveland,OH,44120,Two,Cuyahoga,Calvin Marshall
Kay,John,1/1/2020,12398489,New Lexington,OH,43764,Ten,Perry County,John Kay
Kelly,Patrick,1/1/2020,13733735,Marietta,OH,45750,Ten,Washington County,John Kay
Kowalysko,Roman,1/1/2020,12805631,Novelty,OH,44072,Two,Cuyahoga County,Calvin Marshall
Kumar,Yash,1/1/2020,14640358,Cleveland,OH,44106,Two,Cuyahoga County,Calvin Marshall
Larkin,Duane,9/1/2020,12478587,Cincinnati,OH,45231,Nine,Hamilton County,John Miller
Lin,Katherine,1/1/2020,12772721,Columbus,OH,43204,Seven,Franklin County,Steve Charles
Luo,Max,1/1/2020,16085488,Solon,OH,44139,Two,Cuyahoga County,Calvin Marshall
Lutz,Christopher,1/1/2020,12483408,Elmore,OH,43416,One,Ottawa County,Mike Joelson
Mantia,Tony,Lifetime,,Bellbrook,OH,45305,Six,Greene County,Kel Utendorf
Mazuchowski,Tom,Lifetime,,Sterling Heights,MI,48310,Out of State,MI,Out of State
McDermott,John,1/1/2020,14252351,Worthington,OH,43085,Seven,Franklin County,Steve Charles
Mercer,Richard,1/1/2020,12932568,Beavercreek,OH,45431,Six,Greene County,Kel Utendorf
Meyo,Dan,1/1/2020,10263735,Parma Heights,OH,44130,Two,Cuyahoga County,Calvin Marshall
Miller,John,1/1/2020,12777396,Reynoldsburg,OH,43068,Seven,Franklin County,Steve Charles
Miller,"Paul,A.",1/1/2020,10256194,Columbus,OH,43229,Seven,Franklin County,Steve Charles
Miller,Solomon,1/1/2020,,,,,,,
Murthy,Pappu,1/1/2020,11038824,North Olmsted,OH,44070,Two,Cuyahoga County,Calvin Marshall
Napper,Lloyd,1/1/2020,12095710,Columbus,OH,43207,Seven,Franklin,Steve Charles
Neilley,Grant,1/1/2020,13205760,Baltimore,OH,43105,Seven,Franklin County,Steve Charles
Nelson,Christopher,1/1/2020,16805576,Carmel,IN,46032,Out of State,IN,Out of State
Nichols,Charles,1/1/2020,,Lima,OH,45801,Three,Allen County,Chris Bechtold
Paxton,Larry,Lifetime,,Cincinnati,OH,45212,Nine,Hamilton County,John Miller
Pisini,Dakshin,4/1/2020,14777591,Delaware,OH,43015-1684,Four,Delaware County,Eric Gittrich
Pisini,Venkateswara,4/1/2020,14948343,Delaware,OH,43015-1684,Four,Delaware County,Eric Gittrich
Pokrzywa,John,Lifetime,,Curtice,OH,43412,One,Lucas County,Mike Joelson
Polcyn,Brett,1/1/2020,16074933,Brookpark,OH,44142,Two,Cuyahoga County,Calvin Marshall
Polcyn,Jeffrey J.,1/1/2020,12760226,Sagamore Hills,OH,44067,Five,Summit County,Joe Yun
Pratt,Joseph,1/1/2020,16406117,Cleveland Heights,OH,44106,Two,Cuyahoga County,Calvin Marshall
Presler,Wendel,Lifetime,,Circleville,OH,43113,Seven,Pickaway County,Steve Charles
Ramer,Scott,1/1/2020,12664216,Upper Arlington,OH,43212,Seven,Franklin County,Steve Charles
Rana,Neil,1/1/2020,14506898,Cleveland,OH,44106,Two,Cuyahoga County,Calvin Marshall
Redmon,Tim,4/1/2020,12432827,Hilliard,OH,43026,Seven,Franklin County,Steve Charles
Rezack,Thomas,Lifetime,,Urbana,OH,43078,Six,Champaign County,Kel Utendorf
Rice,Joseph,Lifetime,,Carmel,CA,93923,Out of State,CA,Out of State
Rief,David B.,2/28/2020,12497904,Cincinnati,OH,45244,Nine,Hamilton County,John Miller
Rogers,L. Thad,Lifetime,,Macon,GA,31204,Out of State,GA,Out of State
Rohlfing,David,1/1/2020,12863534,Dublin,OH,43017,Seven,Franklin County,Steve Charles
Sampath,Aja,1/1/2020,14771317,Dublin,OH,43016,Seven,Franklin County,Steve Charles
Schwan,Fred,1/1/2025,12685933,Pt Clinton,OH,43452,One,Ottawa County,Mike Joelson
Shelton,Evan,1/1/2020,12658546,Blacklick,OH,43004,Seven,Franklin County,Steve Charles
Shen,Christopher,1/1/2020,14432243,Powell,OH,43065,Four,Delaware County,Eric Gittrich
Sherwin,Aaron,1/1/2020,15772684,Gahanna,OH,43230,Four,Wyandot,Eric Gittrich
Silvers,Joseph,1/1/2020,12519359,New Paris,OH,45347-9003,Six,Preble County,Kel Utendorf
Simplina,Arthur,1/1/2020,16630814,Dublin,OH,43016,Seven,Franklin,Steve Charles
Sinn,Benjamin,1/1/2020,16874213,Warren,OH,44481,Five,Trumbull,Joe Yun
Skinner,Daryl,1/1/2020,12724074,Medway,OH,45341,Six,Clark County,Kel Utendorf
Slagle,Jim,1/1/2021,10268940,Marion,OH,43302,Four,Marion County,Eric Gittrich
Smaltz Jr,John B.,1/1/2022,11302670,Ottawa Hills,OH,43606,One,Lucas County,Mike Joelson
Smith,Louis,1/1/2020,1101986,Cleveland,OH,44127,Two,Cuyahoga County,Calvin Marshall
Smith,Philip,1/1/2020,12875247,West Jefferson,OH,43162,Seven,Madison County,Steve Charles
Solomon,Sophie,1/1/2020,,Cleveland,OH,44106,Two,Cuyahoga County,Calvin Marshall
Soni,Arjun,,,,,,,,
Stewart,William,1/1/2020,12520857,Columbus,OH,43206,Seven,Franklin County,Steve Charles
Steve,Michael,1/1/2020,11300553,Columbus,OH,43232-6170,Seven,Franklin County,Steve Charles
Sutherland,James,1/1/2020,12524559,Charleston,WV,25314,Out of State,WV,Out of State
Swartz,Reed,1/1/2020,16313755,New Albany,OH,43054,Seven,Franklin County,Steve Charles
Taylor,Donald,Lifetime,,Cincinnati,OH,45238,Nine,Hamilton County,John Miller
Terrible,Dan,Lifetime,10253446,Philo,OH,43771,Eight,Muskingum County,David Cannon
Thall,Andrew,Lifetime,10255881,Columbus,OH,43215,Seven,Franklin County,Steve Charles
Thompson,Ian,1/1/2020,,Columbus,OH,43229,Seven,Franklin County,Steve Charles
Ulloa,Antonio,1/1/2020,10280796,Dayton,OH,45414,Six,Montgomery County,Kel Utendorf
Utendorf,K. Robert,1/1/2020,12432519,Troy,OH,45373,Six,Miami County,Kel Utendorf
Vail,Richard,1/1/2020,12457899,Delaware,OH,43015,Four,Delaware County,Eric Gittrich
Vandrasi,Jaswanth,1/1/2020,,Dublin,OH,43016,Seven,Franklin County,Steve Charles
Van Zandweghe,Henri,1/1/2020,15949902,Solon,OH,44139,Two,Cuyahoga County,Calvin Marshall
Walker,Chris,1/1/2020,16960081,Hillard,OH,43026,Seven,Franklin County,Steve Charles
Walsh,William,1/1/2020,,,,,,,
Walters ,Michael,Lifetime,A525797,London,OH,43140,Seven,Madison County,Steve Charles
Wang,Jason,1/1/2020,,Mason,OH,45040,Nine,Warren County,John Miller
WILSON,RUSSELL,1/1/2020,,Cincinnati,OH,45236,Nine,Warren County,John Miller
Wright,William B.,1/1/2020,12462971,Strongsville,OH,44149,Two,Cuyahoga County,Calvin Marshall
Zucksworth,Alan,1/1/2020,12752885,Beavercreek,OH ,45431,Six,Greene County,Kel Utendorf`, {
	complete: function(results) {
		console.log("Finished:", results.data);
		// parseTop50(results.data);
		// parseTop50Qualified(results.data);
		parseOcaMembers(results.data);
	}
});


(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var data = {
		countries: [
			['indonesia', 'jakarta'],
			['iran','tehran'],
			['iraq','baghdad'],
			['ireland','dublin'],
			['mexico', 'mexico_city'],
			['italy', 'rome'],
			['south_sudan', 'juba'],
			['mongolia', 'ulaanbaatar'],
			['ecuador', 'quito'],
			['south_korea', 'seoul'],
			['cameroon', 'yaoundé'],
			['zimbabwe', 'harare'],
			['trinidad_and_tobago', 'port_of_spain'],
			['tonga', 'nukualofa'],
			['philippines', 'manila'],
			['romania', 'bucharest'],
			['montenegro', 'podgorica'],
			['fiji', 'suva'],
			['micronesia', 'palikir'],
			['nicaragua', 'managua'],
			['oman', 'muscat'],
			['eritrea', 'asmara'],
			['cuba', 'havana'],
			['hungary', 'budapest'],
			['brazil', 'brasilia'],
			['u_s_a', 'washington'],
			['japan', 'tokyo'],
			['luxembourg', 'luxembourg'],
			['slovenia', 'ljubljana'],
			['bhutan', 'thimphu'],
			['pakistan', 'islamabad'],
			['albania', 'tirana'],
			['malaysia', 'kuala_lumpur'],
			['angola', 'luanda'],
			['bahamas', 'nassau'],
			['tajikistan', 'dushanbe'],
			['nigeria', 'abuja'],
			['mozambique', 'maputo'],
			['turkmenistan', 'ashgabat'],
			['uruguay', 'montevideo'],
			['sweden', 'stockholm'],
			['nauru', 'yaren_district'],
			['germany', 'berlin'],
			['georgia', 'tbilisi'],
			['moldova', 'chisinau'],
			['lithuania', 'vilnius'],
			['croatia', 'zagreb'],
			['panama','panama_city'],
			['kuwait','kuwait_city'],
			['saint_lucia', 'castries'],
			['brunei_seri', 'begawan'],
			['egypt', 'cairo'],
			['togo', 'lomé'],
			['uganda', 'kampala'],
			['peru', 'lima'],
			['belgium', 'brussels'],
			['kenya', 'nairobi'],
			['central_african_republic', 'bangui'],
			['macedonia', 'skopje'],
			['lebanon', 'beirut'],
			['mauritania', 'nouakchott'],
			['kiribati', 'south_tarawa'],
			['namibia', 'windhoek'],
			['marshall_islands', 'majuro'],
			['venezuela', 'caracas'],
			['srilanka', 'srijayawardenepura_kotte'],
			['comoros','moroni'],
			['argentina', 'buenos_aires'],
			['bahrain', 'manama'],
			['swaziland','mbabane'],
			['algeria','algiers'],
			['cabo_verde','praia'],
			['djibouti', 'djibouti'],
			['afghanistan', 'kabul'],
			['saudi_arabia', 'riyadh'],
			['vietnam', 'hanoi'],
			['belarus', 'minsk'],
			['dominican_republic', 'santo_domingo'],
			['zambia','lusaka'],
			['central_african', 'bangui'],
			['solomon_islands','honiara'],
			['saint_vincent','kingstown'],
			['san_marino', 'san_marino'],
			['russia','moscow'],
			['israel','jerusalem'],
			['cote_divoire', 'yamoussoukro'],
			['saint_kitts_and_nevis','basseterre'],
			['kosovo', 'pristina'],
			['suriname', 'paramaribo'],
			['mauritius', 'port_louis'],
			['monaco', 'monaco'],
			['malta', 'valletta'],
			['chile', 'santiago'],
			['singapore', 'singapore'],
			['tunisia', 'tunis'],
			['uzbekistan', 'tashkent'],
			['spain', 'madrid'],
			['libya', 'tripoli'],
			['bulgaria', 'sofia'],
			['jamaica', 'kingston'],
			['yemen', 'sanaa'],
			['tuvalu', 'funafuti'],
			['poland', 'warsaw'],
			['uruguay', 'montevideo'],
			['bosnia', 'sarajevo'],
			['armenia', 'yerevan'],
			['new_zealand', 'wellington'],
			['morocco', 'rabat'],
			['dominica', 'roseau'],
			['canada', 'ottawa'],
			['andorra', 'andorra_la_vella'],
			['iceland', 'reykjavik'],
			['taiwan', 'taipei'],
			['switzerland', 'Bern'],
			['finland','helsinki'],
			['united_kingdom', 'london'],
			['cyprus','nicosia'],
			['greece', 'athens'],
			['france','paris'],
			['costa_rica', 'san_jose'],
			['czech_republic','prague'],
			['sao_tome', 'sao_tome'],
			['cambodia', 'phnom_penh'],
			['timor', 'leste_dili'],
			['thailand','bangkok'],
			['ethiopia', 'addis_ababa'],
			['honduras', 'tegucigalpa'],
			['north_korea','pyongyang'],
			['grenada', 'st_georges'],
			['guatemala', 'Guatemala_city'],
			['guinea', 'malabo'],
			['liberia', 'monrovia'],
			['lesotho', 'maseru'],
			['syria', 'damascus'],
			['laos', 'vientiane'],
			['paraguay', 'asuncion'],
			['belize', 'belmopan'],
			['bangladesh', 'dhaka'],
			['samoa', 'apia'],
			['bolivia', 'la_paz'],
			['antigua', 'saint_johns'],
			['india', 'new_delhi'],
			['eritrea', 'asmara'],
			['congo', 'kinshasa'],
			['south_africa', 'cape_town'],
			['rwanda', 'kigali'],
			['sierra_leone','freetown'],
			['mali', 'bamako'],
			['nepal', 'kathmandu'],
			['ghana', 'accra'],
			['gambia', 'banjul'],
			['botswana', 'gaborone'],
			['portugal', 'lisbon'],
			['denmark', 'copenhagen'],
			['palestine', 'ramallah'],
			['australia', 'canberra'],
			['seychelles', 'victoria'],
			['sudan', 'khartoum'],
			['azerbaijan', 'Baku'],
			['ukraine', 'kyiv'],
			['china', 'beijing'],
			['colombia', 'bogota'],
			['haiti', 'port-au-prince'],
			['liechtenstein', 'vaduz'],
			['latvia', 'riga'],
			['senegal', 'dakar'],
			['myanmar', 'naypyidaw'],
			['barbados', 'bridgetown'],
			['burkina_faso', 'ouagadougou'],
			['burundi', 'bujumbura'],
			['papua_new_guinea', 'port_moresby'],
			['maldives', 'male'],
			['qatar', 'doha'],
			['el_salvador', 'san_salvador'],
			['netherlands', 'amsterdam'],
			['norway', 'oslo'],
			['slovakia', 'bratislava'],
			['austria', 'vienna'],
			['turkey', 'ankara'],
			['kazakhstan','astana'],
			['somalia', 'mogadishu'],
			['kyrgyzstan', 'bishkek'],
			['madagascar', 'antananarivo'],
			['niger', 'niamey'],
			['benin', 'porto-novo'],
			['guyana', 'georgetown'],
			['tanzania', 'dodoma'],
			['guinea', 'bissaubissau'],
			['malawi', 'lilongwe'],
			['guinea', 'conakry'],
			['gabon', 'libreville'],
			['vanuatu', 'portvila'],
			['jordan', 'amman'],
			['palau', 'ngerulmud'],
			['serbia', 'belgrade']
		],
		sources: [
			'https://www.google.ca/maps/@-6.1722729,106.8130564,3a,90y,165.99h,60.31t/data=!3m6!1e1!3m4!1sndCK9RajrKcBlS23REjO6A!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/place/Tehran,+Iran/@35.6762219,51.4221819,3a,37.5y,203.74h,96.35t/data=!3m8!1e1!3m6!1s-mNZa1NWN1OU%2FVrkQygtHAhI%2FAAAAAAAAD4g%2Fhzg6SLHKoM0!2e4!3e11!6s%2F%2Flh4.googleusercontent.com%2F-mNZa1NWN1OU%2FVrkQygtHAhI%2FAAAAAAAAD4g%2Fhzg6SLHKoM0%2Fw203-h101-n-k-no%2F!7i7168!8i3584!4m2!3m1!1s0x3f8e00491ff3dcd9:0xf0b3697c567024bc!6m1!1e1',
			'https://www.google.ca/maps/@33.3123817,44.45092,3a,90y,206.19h,64.6t/data=!3m7!1e1!3m5!1s-9sZBSvtVpQw%2FUvj9T0-IrII%2FAAAAAAAAAAA%2FuJRLDvw05DM!2e4!3e11!7i4000!8i2000!6m1!1e1',
			'https://www.google.ca/maps/@53.3455096,-6.2437213,3a,90y,280.1h,73.05t/data=!3m6!1e1!3m4!1sArxteFIwGoeKh51bYgQChg!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/@19.4313199,-99.1362153,3a,75y,189.34h,78.15t/data=!3m6!1e1!3m4!1sw24Nz0L7VIndhuWkvhYzpA!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/@41.883048,12.5890732,3a,90y,284.42h,71.98t/data=!3m6!1e1!3m4!1sBhles1abvVdnXPtl9BpyZQ!2e0!7i13312!8i6656',
			'https://www.google.ca/maps/place/Juba,+South+Sudan/@4.860203,31.6048497,3a,75y,181h,90t/data=!3m8!1e2!3m6!1s-j0CsuMirsrg%2FVQslPcjKtEI%2FAAAAAAAAHdI%2FhzlPgEmE6-Y!2e4!3e12!6s%2F%2Flh5.googleusercontent.com%2F-j0CsuMirsrg%2FVQslPcjKtEI%2FAAAAAAAAHdI%2FhzlPgEmE6-Y%2Fs203-k-no%2F!7i4608!8i3456!4m2!3m1!1s0x1712804abcf3b5f9:0xd89839286346c433!6m1!1e1',
			'https://www.google.ca/maps/@47.9116453,106.8366065,3a,37.5y,349.36h,76.1t/data=!3m6!1e1!3m4!1sgxqt3yhRsG2QoLpz6i1ddA!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/@-0.113544,-78.4654784,3a,90y,315.56h,68.49t/data=!3m6!1e1!3m4!1s2KAXujuu6xx5qLz4aURu0A!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/@37.4998815,127.1517875,3a,30y,27.25h,85t/data=!3m6!1e1!3m4!1s3bYZA_VP-5fQz3GGd44ZcA!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/place/Yaounde,+Cameroon/@3.812272,11.523499,3a,75y,352h,90t/data =!3m8!1e2!3m6!1s5655850!2e1!3e10!6s%2F%2Flh4.googleusercontent.com%2Fproxy%2F1m7IJzbv3 tUQeHmgEjLflJlx3iLGT_Z3xCd2ZBVj_KP_iloMzREr08vykZBXMmS5illx8A8QVWyobYz26tutQPAHw4yK %3Dw203-h152!7i2272!8i1704!4m2!3m1!1s0x108bcf7a309a7977:0x7f54bad35e693c51!6m1!1e1',
			'https://www.google.ca/maps/place/Harare,+Zimbabwe/@-17.8499928,31.0168328,3a,45y,211.24h,86. 25t/data=!3m8!1e1!3m6!1s- 92az3ujC8lI%2FVhfNUBcE9lI%2FAAAAAAAAAKs%2F0AXKp62wCks!2e4!3e11!6s%2F%2Flh3.google usercontent.com%2F-92az3ujC8lI%2FVhfNUBcE9lI%2FAAAAAAAAAKs%2F0AXKp62wCks%2Fw203- h101-n-k-no%2F!7i8192!8i4096!4m2!3m1!1s0x1931a4ee1bdddb35:0xa5143b9be5134f2f!6m1!1e1',
			'https://www.google.ca/maps/place/Port+of+Spain,+Trinidad+and+Tobago/@10.6558527,-61.5158576, 3a,75y,313h,90t/data=!3m8!1e2!3m6!1s-o- b3nx8zpz4%2FVUfHltozHzI%2FAAAAAAAAAB0%2FqIAj1hFzCi0!2e4!3e12!6s%2F%2Flh3.googleuser content.com%2F-o-b3nx8zpz4%2FVUfHltozHzI%2FAAAAAAAAAB0%2FqIAj1hFzCi0%2Fs203-k- no%2F!7i5312!8i2988!4m2!3m1!1s0x8c360812949e7641:0x96eca5e86b177c3a!6m1!1e1',
			'https://www.google.ca/maps/place/Nuku\'alofa,+Tonga/@-21.136736,-175.202451,3a,75y,273h,90t/dat a=!3m8!1e2!3m6!1s60393140!2e1!3e10!6s%2F%2Flh5.googleusercontent.com%2Fproxy%2FSPJMTJ H9- aWQIAD97McNL0gv3Qa95wJjci6Tgjq5jyaTIxJ6y8CebHFWxLErHlQ1Q4OFXfAWHjEBuoo_dc3ypI3NBK nNXw%3Dw203-h134!7i4928!8i3264!4m2!3m1!1s0x71f4a3c48d9a7a03:0x346fc90a370759c9!6m1!1e1',
			'https://www.google.ca/maps/@14.6000032,120.984522,3a,37.5y,104.94h,81.94t/data=!3m6!1e1!3m4! 1sSBt0Qm0s89CiE1giwrBfgw!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/@44.5039539,26.0251894,3a,75y,280.04h,93.89t/data=!3m6!1e1! 3m4!1shLjQ2glmyIHxzoGCrRoKag!2e0!7i13312!8i6656',
			'https://www.google.ca/maps/place/Podgorica,+Montenegro/@42.4343584,19.2099624,3a,90y,150.96 h,79.18t/data=!3m8!1e1!3m6!1s- UluzFm24LPw%2FVYjZE78s01I%2FAAAAAAAAsyo%2FIrEcdUmyNQY!2e4!3e11!6s%2F%2Flh5.googl eusercontent.com%2F- UluzFm24LPw%2FVYjZE78s01I%2FAAAAAAAAsyo%2FIrEcdUmyNQY%2Fw203-h101-n-k- no%2F!7i10240!8i5120!4m2!3m1!1s0x134de8079606867d:0x6bf78a76ea588ae9!6m1!1e1',
			'https://www.google.ca/maps/@-18.1516833,178.4230667,3a,37.5y,76.17h,87.55t/data=!3m8!1e1!3m6 !1s- XB6T2PLhPq4%2FUr5BQbfWBnI%2FAAAAAAAANlw%2FKDdICwIqMAA!2e4!3e11!6s%2F%2Flh6.go ogleusercontent.com%2F- XB6T2PLhPq4%2FUr5BQbfWBnI%2FAAAAAAAANlw%2FKDdICwIqMAA%2Fw203-h101-n-k- no%2F!7i6000!8i3000!6m1!1e1',
			'https://www.google.ca/maps/place/Palikir,+Pohnpei,+Federated+States+of+Micronesia/@6.908576,15 8.159105,3a,75y,70h,90t/data=!3m8!1e2!3m6!1s86839184!2e1!3e10!6s%2F%2Flh5.googleuserconten t.com%2Fproxy%2FqNXAcR3sWntUcTqBSozqefjYXJMKc0nV6KjCbLjahemr0UKPtEBV5Xo- WtDiAASqRjQYC0D5U2e6nNgOxtugogDbF6Rjng%3Dw203- h114!7i4000!8i2248!4m2!3m1!1s0x65d9ca869adf2cdb:0x95895905ca43166f!6m1!1e1',
			'https://www.google.ca/maps/@12.1526613,-86.2738699,3a,37. 5y,282.85h,94.25t/data=!3m8!1e1!3m6!1s-C4mLxZeLrmU% 2FVtHHQa2bakI%2FAAAAAAAAAAc%2FtTChAia8mu0!2e4!3e11!6s%2F% 2Flh3.googleusercontent.com%2F-C4mLxZeLrmU%2FVtHHQa2bakI% 2FAAAAAAAAAAc%2FtTChAia8mu0%2Fw203-h101-n-k-no%2F!7i10240! 8i5120',
			'https://www.google.ca/maps/place/Muscat,+Oman/@23.615066,58.594516,3a,75y,260h,90t/data=!3m 8!1e2!3m6!1s- twbGyj3awxA%2FURgpOOxYdfI%2FAAAAAAABVu4%2FQMFyI9I2Rt8!2e4!3e12!6s%2F%2Flh4.googl eusercontent.com%2F- twbGyj3awxA%2FURgpOOxYdfI%2FAAAAAAABVu4%2FQMFyI9I2Rt8%2Fs203-k- no%2F!7i2048!8i1366!4m2!3m1!1s0x3e91ffa8879aafc9:0xdb53876d0d79a72c!6m1!1e1',
			'https://www.google.ca/maps/place/Asmara,+Eritrea/@15.333508,38.922191,3a,75y,241h,90t/data=!3 m8!1e2!3m6!1s46345901!2e1!3e10!6s%2F%2Flh5.googleusercontent.com%2Fproxy%2F2HjKvnl_n8V 1MGNIi3vI1g_i25IU8GAqwKS1GoO3j4lfs7NSuHuv6MfxvBepwNIBM8Hhr0RvVryZHxTvPPCINA5DXSp MzA%3Dw203-h152!7i2000!8i1500!4m2!3m1!1s0x166df23bb4c933a9:0xb8c1b327af63f5c5!6m1!1e1',
			'https://www.google.ca/maps/@23.13812,-82.3597219,3a,45y,206.25h,96.94t/data=!3m8!1e1!3m6!1s- V0ydLJUlJxY%2FVQduuey_ZXI%2FAAAAAAAAZzw%2F2ZBDy4qrS9Y!2e4!3e11!6s%2F%2Flh3.googl eusercontent.com%2F- V0ydLJUlJxY%2FVQduuey_ZXI%2FAAAAAAAAZzw%2F2ZBDy4qrS9Y%2Fw203-h101-n-k- no%2F!7i7168!8i3584!6m1!1e1',
			'https://www.google.ca/maps/@47.4979238,19.0298997,3a,90y,47.47h,56.41t/data=!3m6!1e1!3m4!1sa aCc2hxotZ586mimU3ZZhQ!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/@-15.8727782,-47.9234988,3a,75y,47.01h,44.26t/data=!3m6!1e1!3m4!1 sIFPFjVya6jzxruVdcxf49Q!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/@38.896665,-77.0394575,3a,90y,94.23h,58.41t/data=!3m6!1e1!3m4!1sr Z_p64KHR2ug_KBTO1jxKA!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/@35.7621995,139.338203,3a,90y,65.75h,81.52t/data=!3m6!1e1!3m4!1so jTvREAkyfIUkbOcz_7stw!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/@49.6135782,6.1436799,3a,75y,183.98h,70.13t/data=!3m6!1e1!3m4!1sx b4WWrAVZJhXhlVswrQhrA!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/@46.0919245,14.5126915,3a,45y,118.63h,64.45t/data=!3m6!1e1!3m4!1s WYdQk8liZdkOrDyeUHYVXQ!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/@27.480023,89.6391072,3a,90y,104.46h,50.15t/data=!3m6!1e1!3m4!1sn IwtBripEY-t9He5f0NkJw!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/place/Islamabad,+Pakistan/@33.7601919,73.0664928,3a,37.5y,170h,80. 91t/data=!3m8!1e1!3m6!1s- Ny7YdjoCiIY%2FVfp1wneNGUI%2FAAAAAAAAnNY%2FsJFxToU0VkY!2e4!3e11!6s%2F%2Flh5.googl eusercontent.com%2F- Ny7YdjoCiIY%2FVfp1wneNGUI%2FAAAAAAAAnNY%2FsJFxToU0VkY%2Fw203-h101-n-k- no%2F!7i6656!8i3328!4m2!3m1!1s0x38dfbfd07891722f:0x6059515c3bdb02b6!6m1!1e1',
			'https://www.google.ca/maps/@41.32865,19.829555,3a,60y,333.14h,86.95t/data=!3m8!1e1!3m6!1s- GOQNrs2AVwk%2FVN4FeKTIfEI%2FAAAAAAAAKP0%2FQxKJw3ceR90!2e4!3e11!6s%2F%2Flh4.goo gleusercontent.com%2F- GOQNrs2AVwk%2FVN4FeKTIfEI%2FAAAAAAAAKP0%2FQxKJw3ceR90%2Fw203-h101-n-k- no%2F!7i9728!8i4864!6m1!1e1',
			'https://www.google.ca/maps/@3.1878356,101.6991053,3a,90y,225.27h,97.19t/data=!3m6!1e1!3m4!1s aIpfvgVsUGEg_GiV9Wl1fw!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/place/Luanda,+Angola/@-8.8183851,13.2712095,3a,90y,359.9h,82.8t/da ta=!3m8!1e1!3m6!1s- q9KC_oUvqEU%2FVcEqTbcNPFI%2FAAAAAAAAaVw%2FhMYNrwIVTcE!2e4!3e11!6s%2F%2Flh5.goo gleusercontent.com%2F- q9KC_oUvqEU%2FVcEqTbcNPFI%2FAAAAAAAAaVw%2FhMYNrwIVTcE%2Fw203-h101-n-k- no%2F!7i10240!8i5120!4m2!3m1!1s0x1a51f15cdc8d2c7d:0x850c1c5c5ecc5a92!6m1!1e1',
			'https://www.google.ca/maps/place/Nassau,+The+Bahamas/@25.0773048,-77.4117508,3a,90y,182.28 h,116.43t/data=!3m8!1e1!3m6!1s- VglhBJsOFBI%2FVICXWQgC4aI%2FAAAAAAAAAMM%2FcL4XKkPm91U!2e4!3e11!6s%2F%2Flh6.go ogleusercontent.com%2F- VglhBJsOFBI%2FVICXWQgC4aI%2FAAAAAAAAAMM%2FcL4XKkPm91U%2Fw203-h101-n-k- no%2F!7i3584!8i1792!4m2!3m1!1s0x892f7c99b981dbc9:0x2aef01d3485e50d2!6m1!1e1',
			'https://www.google.ca/maps/place/Dushanbe,+Tajikistan/@38.5626978,68.7761878,3a,75y,210.55h,8 7.89t/data=!3m8!1e1!3m6!1s- oK0fxeGsNFw%2FVc33x0gEp7I%2FAAAAAAAAVWk%2FnEDyUzXpdpk!2e4!3e11!6s%2F%2Flh5.goo gleusercontent.com%2F- oK0fxeGsNFw%2FVc33x0gEp7I%2FAAAAAAAAVWk%2FnEDyUzXpdpk%2Fw203-h101-n-k- no%2F!7i5656!8i2828!4m2!3m1!1s0x38b5d16fd27bf89b:0xddf9378ddea1fd44!6m1!1e1',
			'https://www.google.ca/maps/@8.95127,7.0720789,3a,75y,195. 26h,96.85t/data=!3m8!1e1!3m6!1s-sanjONPYii4%2FUxYU3lrLoFI% 2FAAAAAAAAEOw%2FZS587JynIVw!2e4!3e11!6s%2F%2Flh6. googleusercontent.com%2F-sanjONPYii4%2FUxYU3lrLoFI% 2FAAAAAAAAEOw%2FZS587JynIVw%2Fw203-h101-n-k-no%2F!7i4000! 8i2000!6m1!1e1',
			'https://www.google.ca/maps/@-25.9754247,32.5772256,3a,60y,355.4h,98.68t/data=!3m8!1e1!3m6!1s - niP22tGjqj0%2FViJBGqq0nNI%2FAAAAAAAAKag%2FVRIyMlQZm0A!2e4!3e11!6s%2F%2Flh4.google usercontent.com%2F- niP22tGjqj0%2FViJBGqq0nNI%2FAAAAAAAAKag%2FVRIyMlQZm0A%2Fw203-h101-n-k- no%2F!7i6144!8i3072!6m1!1e1',
			'https://www.google.ca/maps/place/Ashgabat,+Turkmenistan/@37.9455164,58.4136388,3a,37.5y,242. 14h,87.14t/data=!3m8!1e1!3m6!1s- hDaujmdr6rc%2FVQQ9OX0G4bI%2FAAAAAAAAATM%2Fb8pP2xfhsG8!2e4!3e11!6s%2F%2Flh6.goog leusercontent.com%2F- hDaujmdr6rc%2FVQQ9OX0G4bI%2FAAAAAAAAATM%2Fb8pP2xfhsG8%2Fw203-h101-n-k- no%2F!7i8704!8i4352!4m2!3m1!1s0x3f6ffe1bab3684d9:0x3cde013f62d3ade9!6m1!1e1',
			'https://www.google.ca/maps/place/Montevideo,+Uruguay/@-34.8864443,-56.0734376,3a,90y,155.45h ,71.38t/data=!3m7!1e1!3m5!1snzUsE02KtIMbvVAL2Z- TTw!2e0!6s%2F%2Fgeo1.ggpht.com%2Fcbk%3Fpanoid%3DnzUsE02KtIMbvVAL2Z- TTw%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203 %26h%3D100%26yaw%3D156.02492%26pitch%3D0!7i13312!8i6656!4m2!3m1!1s0x959f80ffc63bf7d 3:0x6b321b2e355bec99!6m1!1e1',
			'https://www.google.ca/maps/@59.327563,18.0639795,3a,75y,64.97h,82.76t/data=!3m7!1e1!3m5!1sIFqrpqGyr1bWYs_5RCg1ZA!2e0!6s%2F%2Fgeo2.ggpht.com%2Fcbk%3Fpanoid%3DIFqrpqGyr1bWYs_5RCg1ZA%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D258.72623%26pitch%3D0!7i13312!8i6656',
			'https://www.google.ca/maps/place/Yaren,+Nauru/@-0.5445671,166.9170642,3a,15y,133.67h,96.53t/data=!3m8!1e1!3m6!1s--fx7-1wMC68%2FUqRJAMBgPDI%2FAAAAAAAAMjo%2FEqyz9fq5V1A!2e4!3e11!6s%2F%2Flh3.googleusercontent.com%2F--fx7-1wMC68%2FUqRJAMBgPDI%2FAAAAAAAAMjo%2FEqyz9fq5V1A%2Fw203-h101-n-k-no%2F!7i6500!8i3250!4m2!3m1!1s0x6f7d1c2abb8daa25:0x5baa79c1aa772276!6m1!1e1',
			'https://www.google.ca/maps/@52.4854178,13.5645052,3a,75y,24.84h,63.27t/data=!3m6!1e1!3m4!1s wjRcp4MRyC1MqMwW1WKcZg!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/@41.6873489,44.8032639,3a,90y,86.51h,62.59t/data=!3m8!1e1!3m6!1s- N5dMzOnjkEs%2FU_u- IpVTWdI%2FAAAAAAAAAqc%2F67bXpgARHZ8!2e4!3e11!6s%2F%2Flh4.googleusercontent.com%2F -N5dMzOnjkEs%2FU_u-IpVTWdI%2FAAAAAAAAAqc%2F67bXpgARHZ8%2Fw203-h101-n-k- no%2F!7i6656!8i3328!6m1!1e1',
			'https://www.google.ca/maps/place/Chisinau,+Moldova/@47.0021769,28.8482689,3a,90y,256.85h,75.47t/data=!3m8!1e1!3m6!1s-OQmrQn7x_E8%2FVbNUxJ-170I%2FAAAAAAABGJc%2FJstx8KqxMXs!2e4!3e11!6s%2F%2Flh5.googleusercontent.com%2F-OQmrQn7x_E8%2FVbNUxJ-170I%2FAAAAAAABGJc%2FJstx8KqxMXs%2Fw203-h101-n-k-no%2F!7i5656!8i2828!4m2!3m1!1s0x40c97c3628b769a1:0x37d1d6305749dd3c!6m1!1e1',
			'https://www.google.ca/maps/@54.6935215,25.2737809,3a,90y,309.37h,70.72t/data=!3m6!1e1!3m4!1s 89QjjkuZKYmEWGCS8e6g5g!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/@45.7697334,16.071068,3a,60y,217.15h,73.71t/data=!3m7!1e1!3m5!1sN HyCfPFXSlj_qBB2E8wUSQ!2e0!6s%2F%2Fgeo2.ggpht.com%2Fcbk%3Fpanoid%3DNHyCfPFXSlj_qB B2E8wUSQ%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w% 3D203%26h%3D100%26yaw%3D289.44641%26pitch%3D0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/place/Panama+City,+Panama/@8.967158,-79.531317,3a,75y,2h,90t/data =!3m8!1e2!3m6!1s97715692!2e1!3e10!6s%2F%2Flh3.googleusercontent.com%2Fproxy%2FANY3MQ EJ8kc6z-MkCF4RuqCOi9RvyTS4_U3b8l2PPAVqMXVBFiWulMALMIArNBZMvU2rUsj- qkreB9u8ZK9iTpTfPa5-rQ%3Dw203- h152!7i4000!8i3000!4m2!3m1!1s0x8faca8f1dbe80363:0xaba25df1f042c10e!6m1!1e1',
			'https://www.google.ca/maps/place/Kuwait+City,+Kuwait/@29.374482,47.964777,3a,75y,142h,90t/data=!3m8!1e2!3m6!1s70285157!2e1!3e10!6s%2F%2Flh5.googleusercontent.com%2Fproxy%2FdJvMXGsyKZHLxlZU7IAbGRWR5N1HDjY6W9pEGDEMci7dTo7RC71uEazbOOw-shpensB7t_pX6EDYvcJPuw-u-K2J262lnQ%3Dw203-h152!7i2048!8i1536!4m2!3m1!1s0x3fcf9c83ce455983:0xc3ebaef5af09b90e!6m1!1e1',
			'https://www.google.ca/maps/place/Castries+City,+St+Lucia/@14.00841,-60.992263,3a,75y,33h,90t/data=!3m8!1e2!3m6!1s-vimjUNfEHC4%2FVHZYjxwzLlI%2FAAAAAAAAmJ0%2FhtMHPEbblZ4!2e4!3e12!6s%2F%2Flh5.googleusercontent.com%2F-vimjUNfEHC4%2FVHZYjxwzLlI%2FAAAAAAAAmJ0%2FhtMHPEbblZ4%2Fs203-k-no%2F!7i1600!8i1200!4m2!3m1!1s0x8c4067a838a6d44f:0x3afffd5e87c58b99!6m1!1e1',
			'https://www.google.ca/maps/place/Bandar+Seri+Begawan,+Brunei/@4.894355,114.9414989,3a,45y,3 46.13h,98.52t/data=!3m8!1e1!3m6!1s- pM8YgdlGQMI%2FVU8JSHFQfrI%2FAAAAAAAACTY%2FDwM7EbCv_WQ!2e4!3e11!6s%2F%2Flh4.g oogleusercontent.com%2F- pM8YgdlGQMI%2FVU8JSHFQfrI%2FAAAAAAAACTY%2FDwM7EbCv_WQ%2Fw203-h101-n-k- no%2F!7i4000!8i2000!4m2!3m1!1s0x3222f5b0540b731f:0xeeacf8c47cbae84b!6m1!1e1',
			'https://www.google.ca/maps/place/Cairo,+Cairo+Governorate,+Egypt/@30.0626428,31.24569,3a,30y, 241.8h,90.41t/data=!3m8!1e1!3m6!1s- ZBOxCZNBVmg%2FUOgDpST5j3I%2FAAAAAAAAHmg%2FdxTgTQ6A7Es!2e4!3e11!6s%2F%2Flh6.g oogleusercontent.com%2F- ZBOxCZNBVmg%2FUOgDpST5j3I%2FAAAAAAAAHmg%2FdxTgTQ6A7Es%2Fw277-h100-n-k- no%2F!7i4454!8i1606!4m2!3m1!1s0x14583fa60b21beeb:0x79dfb296e8423bba!6m1!1e1',
			'https://www.google.ca/maps/place/Lome,+Togo/@6.1887017,1.1607913,3a,37.5y,134.41h,72.42t/data=!3m8!1e1!3m6!1s-8aY7BocHt6s%2FVoFh6ZREYtI%2FAAAAAAAAAFI%2FQvta3hp9H3o!2e4!3e11!6s%2F%2Flh4.googleusercontent.com%2F-8aY7BocHt6s%2FVoFh6ZREYtI%2FAAAAAAAAAFI%2FQvta3hp9H3o%2Fw203-h101-n-k-no%2F!7i10240!8i5120!4m2!3m1!1s0x1023e1c113185419:0x3224b5422caf411d!6m1!1e1',
			'https://www.google.ca/maps/@0.3069588,32.5780787,3a,75y,120.75h,69.43t/data=!3m6!1e1!3m4!1salycf6cLFRphq1JXhHFc5g!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/@-12.0490943,-77.0540125,3a,75y,193.85h,82.79t/data=!3m6!1e1!3m4! 1s0IotxnoCV0y65LVxcQbBkQ!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/@50.8568909,4.3787752,3a,90y,207.73h,66.83t/data=!3m6!1e1!3m4!1sg EGKXe3r9qB_mXPNYKNijw!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/place/Nairobi,+Kenya/@-1.310598,36.680697,3a,90y,116.26h,86.09t/dat a=!3m8!1e1!3m6!1s- p9ZCfxaEsw4%2FVqaHoovl4iI%2FAAAAAAAAGWw%2FHWFl4Q4Y5io!2e4!3e11!6s%2F%2Flh4.googl eusercontent.com%2F- p9ZCfxaEsw4%2FVqaHoovl4iI%2FAAAAAAAAGWw%2FHWFl4Q4Y5io%2Fw203-h101-n-k- no%2F!7i3584!8i1792!4m2!3m1!1s0x182f1172d84d49a7:0xf7cf0254b297924c!6m1!1e1',
			'https://www.google.ca/maps/place/Bangui,+Central+African+Republic/@4.374397,18.562002,3a,75y/ data=!3m8!1e2!3m6!1s48213292!2e1!3e10!6s%2F%2Flh5.googleusercontent.com%2Fproxy%2FNt0B UJk_9V17knV8VOerICqeZZPtkC7e9efgeTd9zqjZFnkUnmBvG0lTgV7z_- YVsRNowgMTJVbPAwHYBXS1W2ByAucrIg%3Dw203- h152!7i3648!8i2736!4m2!3m1!1s0x10b8ef1ced57aa03:0x9bd6c5df6fe5519!6m1!1e1',
			'https://www.google.ca/maps/@42.0209897,21.4342372,3a,75y,83h,83.69t/data=!3m6!1e1!3m4!1shSp Xg3zuodR_1lD4cSA-iA!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/place/Beirut,+Lebanon/@33.9066256,35.5017567,3a,90y,349.6h,68.89t/ data=!3m8!1e1!3m6!1s-Wq_qm1vkCDE%2FVoEIqOSyPuI%2FAAAAAAAAA10%2FLM_A- nFKgpk!2e4!3e11!6s%2F%2Flh4.googleusercontent.com%2F- Wq_qm1vkCDE%2FVoEIqOSyPuI%2FAAAAAAAAA10%2FLM_A-nFKgpk%2Fw203-h101-n-k- no%2F!7i8704!8i4352!4m2!3m1!1s0x151f17215880a78f:0x729182bae99836b4!6m1!1e1',
			'https://www.google.ca/maps/place/Nouakchott,+Mauritania/@18.1023111,-15.9876778,3a,75y,137h,9 0t/data=!3m8!1e1!3m6!1s- nuiaKj_7VBY%2FU0LzA_uEtdI%2FAAAAAAAAUi0%2FqTS6U7PeH7s!2e4!3e11!6s%2F%2Flh5.google usercontent.com%2F- nuiaKj_7VBY%2FU0LzA_uEtdI%2FAAAAAAAAUi0%2FqTS6U7PeH7s%2Fw203-h101-n-k- no%2F!7i3584!8i1792!4m2!3m1!1s0xe96526c16ece9bd:0x270005bd53c1e1f9!6m1!1e1',
			'https://www.google.ca/maps/place/Bairiki,+Kiribati/@1.3319243,172.9738703,3a,37.5y,77.27h,87.92t/ data=!3m8!1e1!3m6!1s- JszOWxnyvYw%2FVQ3doGe6K2I%2FAAAAAAAAVlM%2FgvUDh6f91Mk!2e4!3e11!6s%2F%2Flh4.goo gleusercontent.com%2F- JszOWxnyvYw%2FVQ3doGe6K2I%2FAAAAAAAAVlM%2FgvUDh6f91Mk%2Fw203-h101-n-k- no%2F!7i2500!8i1250!4m2!3m1!1s0x65647c91c2028703:0xd57569a8406ee384!6m1!1e1',
			'https://www.google.ca/maps/@-22.5604416,17.0922477,3a,75y,241.43h,71.09t/data=!3m7!1e1!3m5!1s-Joob42tlwog%2FVXrqdJSkXeI%2FAAAAAAAAAAA%2FFcOAhacOlT4!2e4!3e11!7i8068!8i4034',
			'https://www.google.ca/maps/place/Majuro,+Majuro+Atoll,+RMI/@7.0830389,171.3548589,3a,90y,344. 36h,85.83t/data=!3m8!1e1!3m6!1s- HR9CugEYcWY%2FVTzI1esNIOI%2FAAAAAAAACcA%2FksOU9jDSNr8!2e4!3e11!6s%2F%2Flh3.goo gleusercontent.com%2F- HR9CugEYcWY%2FVTzI1esNIOI%2FAAAAAAAACcA%2FksOU9jDSNr8%2Fw203-h101-n-k- no%2F!7i2508!8i1254!4m2!3m1!1s0x650f18557b97e0fd:0xdafa9c8545b7d939!6m1!1e1',
			'https://www.google.ca/maps/@10.5088783,-66.8242922,3a,90y,244.76h,89.54t/data=!3m8!1e1!3m6!1 s- Uu57TvEzAXc%2FVChveVHZdHI%2FAAAAAAAACkk%2FShkR0cFxqZM!2e4!3e11!6s%2F%2Flh5.goo gleusercontent.com%2F- Uu57TvEzAXc%2FVChveVHZdHI%2FAAAAAAAACkk%2FShkR0cFxqZM%2Fw203-h101-n-k- no%2F!7i8704!8i4352!6m1!1e1',
			'https://www.google.ca/maps/place/Sri+Jayawardenepura+Kotte,+Sri+Lanka/@6.892185,79.900966,3 a,75y,325h,90t/data=!3m8!1e2!3m6!1s82823783!2e1!3e10!6s%2F%2Flh5.googleusercontent.com%2F proxy%2FN17kQY8SzOlWj3Aa98ppuMELwI4r- hLrz0ozF4YKkvy0QPuPfVuFEKJ5gLBHyH9LMajVgqyPeQh3zru0AhLgD7pv6fDJcg%3Dw203- h152!7i1024!8i768!4m2!3m1!1s0x3ae25990379a8a4f:0x4b887a5266410b49!6m1!1e1',
			'https://www.google.ca/maps/place/Moroni,+Comoros/@-11.7095305,43.2438826,-1a,54.2y/data=!3m 8!1e2!3m6!1s72156916!2e1!3e10!6s%2F%2Flh6.googleusercontent.com%2Fproxy%2FOz78RHTLhS ZkEa044vDDX2TZV3ZfoUCp9GR- CQ3LQvKGSu2lTa_JtWab3VtkOWsgXorTVzb2P5pohwqsTh0odoqbKqIyCQ%3Dw203- h152!7i2592!8i1944!4m2!3m1!1s0x1898feade3e34bb1:0x3943d96d792e2d3e!6m1!1e1',
			'https://www.google.ca/maps/@-34.5959675,-58.3581676,3a,90y,342.41h,82.66t/data=!3m6!1e1!3m4! 1saMhS6VHllbx3752xXb-1Jg!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/place/Manama,+Bahrain/@26.2319991,50.5993454,3a,75y,98.48h,79.36t /data=!3m8!1e1!3m6!1s- DegQVeUhNoI%2FVMXSrdwnFrI%2FAAAAAAAAJ6c%2FO736jwNhX6E!2e4!3e11!6s%2F%2Flh4.goog leusercontent.com%2F- DegQVeUhNoI%2FVMXSrdwnFrI%2FAAAAAAAAJ6c%2FO736jwNhX6E%2Fw203-h101-n-k- no%2F!7i5632!8i2816!4m2!3m1!1s0x3e49af722776a62d:0x8b6738a6070f60c2!6m1!1e1',
			'https://www.google.ca/maps/place/Mbabane,+Swaziland/@-26.3347252,31.1342534,3a,37.5y,19.67h, 84.08t/data=!3m7!1e1!3m5!1sReOpWw4Xyc4bQ7N_VskVXA!2e0!6s%2F%2Fgeo3.ggpht.com%2Fcbk %3Fpanoid%3DReOpWw4Xyc4bQ7N_VskVXA%26output%3Dthumbnail%26cb_client%3Dmaps_sv.t actile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D27.833216%26pitch%3D0!7i13 312!8i6656!4m2!3m1!1s0x1ee8cee147320f07:0x7abf98f27ae1dd9f!6m1!1e1',
			'https://www.google.ca/maps/@36.7882729,3.0644886,3a,90y,221.11h,102.4t/data=!3m8!1e1!3m6!1s- 2k8vpPfiuXM%2FU_0sJ52T7zI%2FAAAAAAAAATU%2FZg3ZmsqKlJQ!2e4!3e11!6s%2F%2Flh6.googl eusercontent.com%2F- 2k8vpPfiuXM%2FU_0sJ52T7zI%2FAAAAAAAAATU%2FZg3ZmsqKlJQ%2Fw427-h100-n-k- no%2F!7i9216!8i2158!6m1!1e1',
			'https://www.google.ca/maps/place/Praia,+Cape+Verde/@14.903618,-23.511923,3a,37.7y/data=!3m8! 1e2!3m6!1s85967429!2e1!3e10!6s%2F%2Flh3.googleusercontent.com%2Fproxy%2FNi- oucQFB23KYd9hVVf5FczvgjeTMCLR2Jgl-YwTZqfs6MMjqWfVKStcI0JrSVEu0- 7gUnHsh_glyAp0byviR0LXBTNTOg%3Dw203- h152!7i4000!8i3000!4m2!3m1!1s0x93598fd1c73f0bb:0x76009dcdcb829a2!6m1!1e1',
			'https://www.google.ca/maps/place/Djibouti/@11.616655,43.147259,3a,75y,182h,90t/data=!3m8!1e2!3 m6!1s86701351!2e1!3e10!6s%2F%2Flh3.googleusercontent.com%2Fproxy%2FJZxCHOA6L252RO_r 5Ec5OXfCXgJJ23PhSk49_4cHCcJgalRntFbIGL08Ydu0Okkop4hHtxvorPGW43yyK- GJ2D_9mxr8AQ%3Dw203- h135!7i4272!8i2848!4m2!3m1!1s0x162300cfde391eb3:0xa12a9a3a7d2821ac!6m1!1e1',
			'https://www.google.ca/maps/place/Kabul,+Afghanistan/@34.558963,69.366215,3a,75y,255h,90t/data =!3m8!1e2!3m6!1s-VMq8H- XlAm4%2FS9IGWdY2KlI%2FAAAAAAAAI6M%2Fr573sYLypSA!2e4!3e12!6s%2F%2Flh4.googleuserco ntent.com%2F-VMq8H-XlAm4%2FS9IGWdY2KlI%2FAAAAAAAAI6M%2Fr573sYLypSA%2Fs203-k- no%2F!7i1600!8i1200!4m2!3m1!1s0x38d1694c3c1e6d49:0xebdf473578214429!6m1!1e1',
			'https://www.google.ca/maps/place/Riyadh+Saudi+Arabia/@24.7674831,46.7567289,3a,75y,253.69h,8 6.62t/data=!3m8!1e1!3m6!1s- mmrh76Uuvf8%2FVDB_xpKm1TI%2FAAAAAAAAAfY%2FhO7iBRadufA!2e4!3e11!6s%2F%2Flh5.goog leusercontent.com%2F- mmrh76Uuvf8%2FVDB_xpKm1TI%2FAAAAAAAAAfY%2FhO7iBRadufA%2Fw203-h101-n-k- no%2F!7i10240!8i5120!4m2!3m1!1s0x3e2f03890d489399:0xba974d1c98e79fd5!6m1!1e1',
			'https://www.google.ca/maps/@21.0404638,105.8512066,3a,75y,337.31h,59.56t/data=!3m7!1e1!3m5!1 s-R- WsY4w0xZo%2FVVw1wuBEEPI%2FAAAAAAAAAAA%2FjSSjbSXDukQ!2e4!3e11!7i8000!8i4000!6m1!1 e1',
			'https://www.google.ca/maps/place/Minsk,+Belarus/@53.9079661,27.6196504,3a,90y,9.91h,44.14t/dat a=!3m8!1e1!3m6!1s- KM0jJ3xJECA%2FU2Ud8GRJ9qI%2FAAAAAAABHbw%2Fj7ojD7at9Fw!2e4!3e11!6s%2F%2Flh5.goog leusercontent.com%2F- KM0jJ3xJECA%2FU2Ud8GRJ9qI%2FAAAAAAABHbw%2Fj7ojD7at9Fw%2Fw203-h101-n-k- no%2F!7i7572!8i3786!4m2!3m1!1s0x46dbcfd35b1e6ad3:0xb61b853ddb570d9!6m1!1e1',
			'https://www.google.ca/maps/place/Santo+Domingo,+Dominican+Republic/@18.4605497,-69.9402101 ,3a,90y,314.51h,36.97t/data=!3m8!1e1!3m6!1s- FBBdAxhYCRM%2FVri4CdWteQI%2FAAAAAAAAAYQ%2F7VX9lQbmLwo!2e4!3e11!6s%2F%2Flh6.go ogleusercontent.com%2F- FBBdAxhYCRM%2FVri4CdWteQI%2FAAAAAAAAAYQ%2F7VX9lQbmLwo%2Fw203-h101-n-k- no%2F!7i8572!8i4286!4m2!3m1!1s0x8eaf89f1107ea5ab:0xd6c587b82715c164!6m1!1e1',
			'https://www.google.ca/maps/place/Lusaka,+Zambia/@-15.3911,28.31625,3a,75y,241h,90t/data=!3m8 !1e2!3m6!1s111788179!2e1!3e10!6s%2F%2Flh4.googleusercontent.com%2Fproxy%2FA- yKephk6nn4ghK7EKMcl1N4EaHmy01u8kdpFJMOZyJ9zDD7cyNe7mUfVfE- opSMVJe6yIrAoM87S82gRMbe8a9G0-khn1w%3Dw203- h152!7i2592!8i1944!4m2!3m1!1s0x1940f37d3cbcaa49:0xd0d093c1462013eb!6m1!1e1',
			'https://www.google.ca/maps/place/Bangui,+Central+African+Republic/@4.374397,18.562002,3a,75y/ data=!3m8!1e2!3m6!1s48213292!2e1!3e10!6s%2F%2Flh5.googleusercontent.com%2Fproxy%2FNt0B UJk_9V17knV8VOerICqeZZPtkC7e9efgeTd9zqjZFnkUnmBvG0lTgV7z_- YVsRNowgMTJVbPAwHYBXS1W2ByAucrIg%3Dw203- h152!7i3648!8i2736!4m2!3m1!1s0x10b8ef1ced57aa03:0x9bd6c5df6fe5519!6m1!1e1',
			'https://www.google.ca/maps/place/Honiara,+Solomon+Islands/@-9.432012,159.952413,3a,75y,325h, 90t/data=!3m8!1e2!3m6!1s18497177!2e1!3e10!6s%2F%2Flh5.googleusercontent.com%2Fproxy%2Fa CR9qB1yRtUdG_bX2miYaLgRnT7pVzOMz1oJwKwZnSzly8mDCO3jWtYsZbFDho84TsGKugm_mhnC4 OxMWXqOkyHzbCjwzA%3Dw203- h152!7i2048!8i1536!4m2!3m1!1s0x6f285b8f3406a2bb:0x43fa3daff6ec04dc!6m1!1e1',
			'https://www.google.ca/maps/place/Kingstown,+St+Vincent+and+the+Grenadines/@13.156803,-61.22 8319,3a,75y,90h,90t/data=!3m8!1e2!3m6!1s68399720!2e1!3e10!6s%2F%2Flh6.googleusercontent.co m%2Fproxy%2FTM9KYxPbr5eUJTLqvxyX1gZpY- PTYSNerLY5LLBOaYudzCHXZvxNlCay8eq41_sSYVQdfaH9aTal2FWLJw8yxg3c1XzE8w%3Dw203- h152!7i4000!8i3000!4m2!3m1!1s0x8c475150d7875c17:0x2f65aae26d2ce2fc!6m1!1e1',
			'https://www.google.ca/maps/@43.9714679,12.4731604,3a,90y,207.53h,71.28t/data=!3m6!1e1!3m4!1s IV5bFTziWRHeuaq_MNbb8g!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/@55.7663773,37.6268296,3a,75y, 4.94h,70.07t/data=!3m6!1e1!3m4!1s71BTcJWcclVMh2RSC5nLyA! 2e0!7i13312!8i6656',
			'https://www.google.ca/maps/place/Jerusalem,+Israel/@31.7745383,35.2409428,3a,90y,21.59h,85.41t /data=!3m8!1e1!3m6!1s- 79ZposxnRfs%2FVJLdspqAt_I%2FAAAAAAAAbwE%2FbcqLiDrfU8Y!2e4!3e11!6s%2F%2Flh4.googleu sercontent.com%2F-79ZposxnRfs%2FVJLdspqAt_I%2FAAAAAAAAbwE%2FbcqLiDrfU8Y%2Fw224- h100-n-k-no%2F!7i7168!8i3196!4m2!3m1!1s0x1502d7d634c1fc4b:0xd96f623e456ee1cb!6m1!1e1',
			'https://www.google.ca/maps/place/Yamoussoukro,+C%C3%B4te+d\'Ivoire/@6.823617,-5.279596,3a,7 5y,210h,90t/data=!3m8!1e2!3m6!1s43441117!2e1!3e10!6s%2F%2Flh5.googleusercontent.com%2Fpr oxy%2FhMsvjskyOqATq6Z4Hws5cRo9wqjs2EPf4mFvSxZRCpLx2as81ITiVpK2D-- wm1TBiY_WlZefnkhXWRxaoiPSo7h1RyqAYg%3Dw203- h152!7i1600!8i1200!4m2!3m1!1s0xfb8913a41c945f7:0x21701f1a1623eede!6m1!1e1',
			'https://www.google.ca/maps/place/Basseterre,+St+Kitts+and+Nevis/@17.297117,-62.724744,3a,75y, 296h,90t/data=!3m8!1e2!3m6!1s-IxuPLFXBYrg%2FVQQJHpzuPeI%2FAAAAAAAC- 1w%2FDZsuO_qGpj8!2e4!3e12!6s%2F%2Flh6.googleusercontent.com%2F- IxuPLFXBYrg%2FVQQJHpzuPeI%2FAAAAAAAC-1w%2FDZsuO_qGpj8%2Fs203-k- no%2F!7i2048!8i1151!4m2!3m1!1s0x8c121b8a427285cb:0xe4c4fa4b90ab4fcf!6m1!1e1',
			'https://www.google.ca/maps/place/Prishtina/@42.6506653,21.1700039,3a,75y,298.73h,88.76t/data=! 3m8!1e1!3m6!1s- QcBj310NQi4%2FVIQwTiTe1II%2FAAAAAAAAAOc%2FvTtRKYUN2Qc!2e4!3e11!6s%2F%2Flh4.googl eusercontent.com%2F- QcBj310NQi4%2FVIQwTiTe1II%2FAAAAAAAAAOc%2FvTtRKYUN2Qc%2Fw203-h101-n-k- no%2F!7i5632!8i2816!4m2!3m1!1s0x13549ee605110927:0x9365bfdf385eb95a!6m1!1e1',
			'https://www.google.ca/maps/place/Paramaribo,+Suriname/@5.850711,-55.120489,3a,75y,266h,90t/d ata=!3m8!1e2!3m6!1s57757741!2e1!3e10!6s%2F%2Flh3.googleusercontent.com%2Fproxy%2FgrdFG G7- 6ZAKfqacCh4XD_b18Wt7Cx4xpoo5rMJ_es0PjQLtlcjYyX5aQ4DLf9aB5K0GOTtKQhAWuGsY2CBB2FS DrKFGYg%3Dw203- h152!7i1280!8i961!4m2!3m1!1s0x8d083520e203f743:0x97cf2079da3f4063!6m1!1e1',
			'https://www.google.ca/maps/@-20.161293,57.499618,3a,37.5y,200.17h,96.22t/data=!3m8!1e1!3m6!1s -nkDeuIS0DSo%2FVbaSIauvkZI%2FAAAAAAAACfE%2F- vYF6DcfuwE!2e4!3e11!6s%2F%2Flh4.googleusercontent.com%2F- nkDeuIS0DSo%2FVbaSIauvkZI%2FAAAAAAAACfE%2F-vYF6DcfuwE%2Fw203-h101-n-k- no%2F!7i8704!8i4352!6m1!1e1',
			'https://www.google.ca/maps/@43.7537737,7.4380296,3a,75y,162.77h,80.79t/data=!3m6!1e1!3m4!1sg rCObbhNdpkruKSkKUk6cw!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/place/Valletta,+Malta/@35.895964,14.5089862,3a,90y,164.06h,70.85t/da ta=!3m8!1e1!3m6!1s- YwhrECu4Z7A%2FVsoLjJ1HEyI%2FAAAAAAAABHo%2FeeKNN8Qnmi0!2e4!3e11!6s%2F%2Flh3.goo gleusercontent.com%2F- YwhrECu4Z7A%2FVsoLjJ1HEyI%2FAAAAAAAABHo%2FeeKNN8Qnmi0%2Fw203-h101-n-k- no%2F!7i5376!8i2688!4m2!3m1!1s0x130e45281d8647c5:0x745ad38ee242c917!6m1!1e1',
			'https://www.google.ca/maps/@-33.4717335,-70.6438837,3a,90y,270.71h,54.09t/data=!3m6!1e1!3m4! 1sS5SWSMrtyw8v-CKAaeDIaQ!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/@1.3631402,103.8839886,3a,90y,235.08h,89.41t/data=!3m6!1e1!3m4!1s LsloFQk57HPlgwtINOGscQ!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/place/Tunis,+Tunisia/@36.813408,10.174026,3a,75y,309h,90t/data=!3m8 !1e2!3m6!1s-y3YdQLS51Hk%2FVbbPWz- C_FI%2FAAAAAAADKhI%2FvAKGYaPHhDo!2e4!3e12!6s%2F%2Flh4.googleusercontent.com%2F- y3YdQLS51Hk%2FVbbPWz-C_FI%2FAAAAAAADKhI%2FvAKGYaPHhDo%2Fs203-k- no%2F!7i2048!8i1150!4m2!3m1!1s0x12fd337f5e7ef543:0xd671924e714a0275!6m1!1e1',
			'https://www.google.ca/maps/place/Tashkent,+Uzbekistan/@41.3684713,69.3148807,3a,37.5y,291.9h, 80.16t/data=!3m8!1e1!3m6!1s-HvfCPvNLHeM%2FU7Kw- KLtuAI%2FAAAAAAABb_g%2FZ7ucdYW5rjc!2e4!3e11!6s%2F%2Flh4.googleusercontent.com%2F- HvfCPvNLHeM%2FU7Kw-KLtuAI%2FAAAAAAABb_g%2FZ7ucdYW5rjc%2Fw203-h101-n-k- no%2F!7i7168!8i3584!4m2!3m1!1s0x38ae8b0cc379e9c3:0xa5a9323b4aa5cb98!6m1!1e1',
			'https://www.google.ca/maps/@40.403808,-3.7228856,3a,90y,352.15h,71.15t/data=!3m6!1e1!3m4!1sU hsmviG_r2zxujg8XMZPDw!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/place/Tripoli,+Libya/@32.9002902,13.2177544,3a,75y,233h,90t/data=!3 m8!1e2!3m6!1s- ryMA3I4XOZ0%2FSBp3NsmSeeI%2FAAAAAAAAAH4%2FIUxFt53scXQ!2e4!3e12!6s%2F%2Flh3.goog leusercontent.com%2F- ryMA3I4XOZ0%2FSBp3NsmSeeI%2FAAAAAAAAAH4%2FIUxFt53scXQ%2Fs203-k- no%2F!7i1600!8i1200!4m2!3m1!1s0x13a892c4c11c43d9:0x8d99d8947b5cec86!6m1!1e1',
			'https://www.google.ca/maps/@42.7060901,23.3469668,3a,75y,276.93h,73.28t/data=!3m6!1e1!3m4!1s fJ-6W25fO_N2zM3CmRrRpQ!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/@18.0029104,-76.7896973,3a,37.5y,330.83h,88.45t/data=!3m7!1e1!3m5!1s-fhO10mNzExA%2FVSbKsu_zVhI%2FAAAAAAAAAAA%2Fo53gqV2i6yI!2e4!3e11!7i2508!8i1254!6m1!1e1',
			'https://www.google.ca/maps/place/Sana\'a,+Yemen/@15.3562559,44.2282426,3a,75y,324h,90t/data=! 3m8!1e2!3m6!1s- 8eg9rjIWnrA%2FVfFUG3IyjhI%2FAAAAAAAAIac%2F6qazRjfrdeE!2e4!3e12!6s%2F%2Flh3.googleuser content.com%2F-8eg9rjIWnrA%2FVfFUG3IyjhI%2FAAAAAAAAIac%2F6qazRjfrdeE%2Fs203-k- no%2F!7i1280!8i960!4m2!3m1!1s0x1603dbd54684f731:0xa46b957a1482ac73!6m1!1e1',
			'https://www.google.ca/maps/place/Funafuti,+Tuvalu/@-8.5030939,179.1959281,3a,37.5y,283.58h,92. 02t/data=!3m8!1e1!3m6!1s- _GftDMpjsD0%2FUwlTXQ5XGgI%2FAAAAAAAAZ8c%2FAdQtflrIn34!2e4!3e11!6s%2F%2Flh4.googleu sercontent.com%2F-_GftDMpjsD0%2FUwlTXQ5XGgI%2FAAAAAAAAZ8c%2FAdQtflrIn34%2Fw203- h101-n-k-no%2F!7i6000!8i3000!4m2!3m1!1s0x6fd6e2432054682f:0x8687354d4a0d995c',
			'https://www.google.ca/maps/place/Warsaw,+Poland/@52.1653851,20.9519774,3a,37.5y,102.96h,90.5 5t/data=!3m8!1e1!3m6!1s-JB360- YGoXg%2FVVOW42s2UUI%2FAAAAAAAATgA%2FLLRiF1Av7Hg!2e4!3e11!6s%2F%2Flh3.googleuser content.com%2F-JB360-YGoXg%2FVVOW42s2UUI%2FAAAAAAAATgA%2FLLRiF1Av7Hg%2Fw203- h101-n-k-no%2F!7i8704!8i4352!4m2!3m1!1s0x471ecc669a869f01:0x72f0be2a88ead3fc!6m1!1e1',
			'https://www.google.ca/maps/place/Montevideo,+Uruguay/@-34.8864443,-56.0734376,3a,90y,155.45h ,71.38t/data=!3m7!1e1!3m5!1snzUsE02KtIMbvVAL2Z- TTw!2e0!6s%2F%2Fgeo1.ggpht.com%2Fcbk%3Fpanoid%3DnzUsE02KtIMbvVAL2Z- TTw%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203 %26h%3D100%26yaw%3D156.02492%26pitch%3D0!7i13312!8i6656!4m2!3m1!1s0x959f80ffc63bf7d 3:0x6b321b2e355bec99!6m1!1e1',
			'https://www.google.ca/maps/place/Sarajevo,+Bosnia+and+Herzegovina/@43.8273739,18.342995,3a,90y,237.39h,98.08t/data=!3m8!1e1!3m6!1s-oMeXx7B7oxE%2FUpn_nko9tRI%2FAAAAAAAAMlk%2FFxJ2vrsVjUY!2e4!3e11!6s%2F%2Flh6.googleusercontent.com%2F-oMeXx7B7oxE%2FUpn_nko9tRI%2FAAAAAAAAMlk%2FFxJ2vrsVjUY%2Fw203-h101-n-k-no%2F!7i3840!8i1919!4m2!3m1!1s0x4758cbb1ed719bd1:0x562ecda6de87b33e!6m1!1e1',
			'https://www.google.ca/maps/place/Yerevan,+Armenia/@40.1689639,44.53696,3a,90y,116.2h,98.72t/data=!3m8!1e1!3m6!1s-QPqHPKk1BEE%2FVCewBnZVsTI%2FAAAAAAAAEdQ%2F8xkxGAfZfbs!2e4!3e11!6s%2F%2Flh5.googleusercontent.com%2F-QPqHPKk1BEE%2FVCewBnZVsTI%2FAAAAAAAAEdQ%2F8xkxGAfZfbs%2Fw203-h101-n-k-no%2F!7i9728!8i4864!4m2!3m1!1s0x406aa2dab8fc8b5b:0x3d1479ae87da526a!6m1!1e1',
			'https://www.google.ca/maps/search/New+Zealand+Wellington/ @-41.2347334,174.7806226,3a,90y,78.23h,88.94t/data=!3m7! 1e1!3m5!1sUZldd3-3GfNH0dOm1doTvQ!2e0!6s%2F% 2Fgeo2.ggpht.com%2Fcbk%3Fpanoid%3DUZldd3- 3GfNH0dOm1doTvQ%26output%3Dthumbnail%26cb_client% 3Dmaps_sv.tactile.gps%26thumb% 3D2%26w%3D203%26h%3D100%26yaw%3D148.5%26pitch%3D0!7i13312! 8i6656',
			'https://www.google.ca/maps/@33.9522814,-6.8969503,3a,37.5y,285.46h,78.76t/data=!3m8!1e1!3m6! 1s-VcSM4vymut4%2FVhV29lq0VyI%2FAAAAAAAAM2E%2Fb49OsI- 29Io!2e4!3e11!6s%2F%2Flh5.googleusercontent.com%2F- VcSM4vymut4%2FVhV29lq0VyI%2FAAAAAAAAM2E%2Fb49OsI-29Io%2Fw203-h101-n-k- no%2F!7i10240!8i5120',
			'https://www.google.ca/maps/place/Roseau,+Dominica/@15.3015178,-61.38511,3a,75y,178.33h,56.11 t/data=!3m8!1e1!3m6!1s- Cyb9x6CYfAA%2FVYHAcwPYIyI%2FAAAAAAAHK4Q%2FcXKQMHgWYgM!2e4!3e11!6s%2F%2Flh5.g oogleusercontent.com%2F- Cyb9x6CYfAA%2FVYHAcwPYIyI%2FAAAAAAAHK4Q%2FcXKQMHgWYgM%2Fw203-h101-n-k- no%2F!7i7168!8i3584!4m2!3m1!1s0x8c14d59176f2ef8b:0x5a2f329cb3abb373!6m1!1e1',
			'https://www.google.ca/maps/@45.3271983,-75.6565743,3a,37.5y,300.71h,82.69t/data=!3m6!1e1!3m4 !1sCWl6VHIPo-mgNbVA4VEHxQ!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/@42.499929,1.5120457,3a,90y,120.54h,79.44t/data=!3m6!1e1!3m4!1sDl UDx1HT7o9_Olc7ldeWow!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/@64.1493819,-21.9672337,3a,37.5y,152.85h,75.55t/data=!3m6!1e1!3m4!1s6XLiQL8tRdsvIc9kbzQCQQ!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/@25.0252157,121.5597752,3a,90y,18.78h,74.35t/data=!3m6!1e1!3m4!1s 5PsFp5y6VjK5kkfI0c66bw!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/@46.9484645,7.4585344,3a,90y,355.13h,70.97t/data=!3m6!1e1!3m4!1sr uX1ZyHHUvXozeNLyQSZDQ!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/@60.1624699,24.9554656,3a,90y,55.18h,65.65t/data=!3m6!1e1!3m4!1sH cwXyf2yIxw65ckSFBnvVg!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/@51.5002353,-0.1260929,3a,90y,95.31h,60.8t/data=!3m6!1e1!3m4!1sPR 03qao-Uww3I1n0SnWTcw!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/@35.1608467,33.342514,3a,90y,263.74h,58.19t/data=!3m8!1e1!3m6!1s- QYY0kMwn4gQ%2FVDaLUJfBvlI%2FAAAAAAAAARE%2FKLVvRkMRg- Y!2e4!3e11!6s%2F%2Flh4.googleusercontent.com%2F- QYY0kMwn4gQ%2FVDaLUJfBvlI%2FAAAAAAAAARE%2FKLVvRkMRg-Y%2Fw203-h101-n-k- no%2F!7i8704!8i4352!6m1!1e1',
			'https://www.google.ca/maps/@37.9873482,23.7565639,3a,60y,193.46h,64.66t/data=!3m6!1e1!3m4!1s sHz70JNiN_iWa0rklms9Zg!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/@48.8336741,2.343071,3a,90y,339.88h,55.07t/data=!3m6!1e1!3m4!1sk mPrWO_HMQwyQFERMaPurA!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/place/San+Jos%C3%A9,+Costa+Rica/@9.9402797,-84.1180277,3a,75y, 284.41h,72.83t/data=!3m8!1e1!3m6!1s-t3YXwUl3kOQ%2FVV- yXOJQNGI%2FAAAAAAAAAGQ%2F73ZXIop3Tac!2e4!3e11!6s%2F%2Flh5.googleusercontent.com%2 F-t3YXwUl3kOQ%2FVV-yXOJQNGI%2FAAAAAAAAAGQ%2F73ZXIop3Tac%2Fw203-h101-n-k- no%2F!7i10240!8i5120!4m2!3m1!1s0x8fa0e342c50d15c5:0xe6746a6a9f11b882!6m1!1e1',
			'https://www.google.ca/maps/@50.0934017,14.4305357,3a,90y,354.09h,94.05t/data=!3m7!1e1!3m5!1s eyt8gj0YqZag7ztHWZtdBQ!2e0!6s%2F%2Fgeo3.ggpht.com%2Fcbk%3Fpanoid%3Deyt8gj0YqZag7zt HWZtdBQ%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3 D203%26h%3D100%26yaw%3D9.3047209%26pitch%3D0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/place/S%C3%A3o+Tom%C3%A9,+S%C3%A3o+Tom%C3%A9+and+P r%C3%ADncipe/@0.344694,6.738063,3a,75y,232h,90t/data=!3m8!1e2!3m6!1s24831552!2e1!3e10!6s %2F%2Flh3.googleusercontent.com%2Fproxy%2F84fo78- HWMWtsHVUhnxh9SSUx2gy_bN67pKF2vaCB7fT6dm05nza8J76wimi7H4r532iNLH9FzDr_scxWthtEo0 aJ0jeww%3Dw203- h152!7i2816!8i2112!4m2!3m1!1s0x10766a5fd6fdf283:0xd05653b078a1de16!6m1!1e1',
			'https://www.google.ca/maps/@11.5463593,104.9390934,3a,75y,82.43h,63.04t/data=!3m6!1e1!3m4!1sci29TXVVvigxOTjucewUpA!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/place/D%C3%ADli,+Timor- Leste/@-8.559167,125.579667,3a,75y,130h,90t/data=!3m8!1e2!3m6!1s92508782!2e1!3e10!6s%2F%2 Flh3.googleusercontent.com%2Fproxy%2FvsrS- bz_veBso05VrXkUSm6ybGL0iTYusSWyoxPi9QqkTvfottpMronOdV_adbyqzfk9fjXGK4I0twvzcAHUcW95 fwbBOA%3Dw203- h152!7i3264!8i2448!4m2!3m1!1s0x2d01e70d32288115:0x3d9d6ee9546912d9!6m1!1e1',
			'https://www.google.ca/maps/@13.779353,100.7463713,3a,90y,273.22h,70.66t/data=!3m6!1e1!3m4!1s 9JeQo09G-F3l6cp6H_SYdw!2e0!7i13312!8i6656',
			'https://www.google.ca/maps/place/Addis+Ababa,+Ethiopia/@9.0491506,38.7700442,3a,90y,316.73h, 56.15t/data=!3m8!1e1!3m6!1s- 311h3N3v35k%2FVkXnQueQUcI%2FAAAAAAAACdY%2Fi4M_s1BKPmc!2e4!3e11!6s%2F%2Flh6.goo gleusercontent.com%2F- 311h3N3v35k%2FVkXnQueQUcI%2FAAAAAAAACdY%2Fi4M_s1BKPmc%2Fw203-h101-n-k- no%2F!7i10240!8i5120!4m2!3m1!1s0x164b85cef5ab402d:0x8467b6b037a24d49!6m1!1e1',
			'https://www.google.ca/maps/place/Tegucigalpa,+Honduras/@14.0711904,-87.1848572,3a,37.5y,354.6 1h,77.83t/data=!3m8!1e1!3m6!1s- D88sERG6zSs%2FVha7d72glJI%2FAAAAAAAAACg%2FBaGNGW4mf- k!2e4!3e11!6s%2F%2Flh3.googleusercontent.com%2F- D88sERG6zSs%2FVha7d72glJI%2FAAAAAAAAACg%2FBaGNGW4mf-k%2Fw203-h101-n-k- no%2F!7i7680!8i3840!4m2!3m1!1s0x8f6fa2babf743d51:0x68cf2238206ac9d3!6m1!1e1',
			'https://www.google.ca/maps/place/Pyongyang,+North+Korea/@39.0228,125.758331,3a,75y,338h,90t/data=!3m8!1e2!3m6!1s-oLTumR4Mcvw%2FVEjSxadBYDI%2FAAAAAAACcd4%2F9Q3WaE_4lAo!2e4!3e12!6s%2F%2Flh6.googleusercontent.com%2F-oLTumR4Mcvw%2FVEjSxadBYDI%2FAAAAAAACcd4%2F9Q3WaE_4lAo%2Fs203-k-no%2F!7i1600!8i941!4m2!3m1!1s0x357e02dae64f4337:0xd40677e21771aa95!6m1!1e1',
			'https://www.google.ca/maps/place/St+George\'s,+Grenada/@12.051704,-61.756843,3a,75y/data=!3m 8!1e2!3m6!1s-yaB-UDgFJTk%2FTue9pZ79BzI%2FAAAAAAAAvpY%2FCdEFIO- Bw6A!2e4!3e12!6s%2F%2Flh4.googleusercontent.com%2F-yaB- UDgFJTk%2FTue9pZ79BzI%2FAAAAAAAAvpY%2FCdEFIO-Bw6A%2Fs203-k- no%2F!7i1600!8i1067!4m2!3m1!1s0x8c38217869008599:0x2325d900d3b5c2a!6m1!1e1',
			'https://www.google.ca/maps/place/Guatemala+City,+Guatemala/@14.587695,-90.5517061,3a,37.5y,6 8.39h,97.05t/data=!3m8!1e1!3m6!1s- piwzDLHcCOs%2FUdmnzJALLEI%2FAAAAAAAAAbs%2FJt4FqyLTbfs!2e4!3e11!6s%2F%2Flh4.googl eusercontent.com%2F- piwzDLHcCOs%2FUdmnzJALLEI%2FAAAAAAAAAbs%2FJt4FqyLTbfs%2Fw203-h101-n-k- no%2F!7i4000!8i2000!4m2!3m1!1s0x8589a180655c3345:0x4a72c7815b867b25!6m1!1e1',
			'',
			'https://www.google.ca/maps/place/Monrovia,+Liberia/@6.291507,-10.78064,3a,75y,299h,90t/data=!3 m8!1e2!3m6!1s3731556!2e1!3e10!6s%2F%2Flh5.googleusercontent.com%2Fproxy%2Fly7iW2T44Nl Wgw1kVE_dvRi00pgeDMgV7aXsZgi8xu4JVuAHiqsrcXryhmF05jzrYHapf4CZKjJKxllLkoZ6tPyhIcQa%3 Dw203-h152!7i1638!8i1229!4m2!3m1!1s0xf09f803d4a9fcc1:0x5b6c4dd7069694af!6m1!1e1',
			'https://www.google.ca/maps/@-29.3130252,27.5003501,3a,90y,63.85h,73.71t/data=!3m6!1e1!3m4!1s oTTenmQVtT5DSIFqNSw-Cg!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/place/Damascus,+Syria/@33.5309037,36.2228372,3a,15y,295.68h,95.13 t/data=!3m8!1e1!3m6!1s-LibvbHAGdk4%2FVlCVxUUSo0I%2FAAAAAAAAAm4%2FU-2d- DGXjjA!2e4!3e11!6s%2F%2Flh3.googleusercontent.com%2F- LibvbHAGdk4%2FVlCVxUUSo0I%2FAAAAAAAAAm4%2FU-2d-DGXjjA%2Fw203-h101-n-k- no%2F!7i7680!8i3840!4m2!3m1!1s0x1518e6dc413cc6a7:0x6b9f66ebd1e394f2!6m1!1e1',
			'https://www.google.ca/maps/@18.0271363,102.6338924,3a,90y,86.55h,81.42t/data=!3m6!1e1!3m4!1s mNFfO-3ysTUFwmzbOpmPcg!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/@-25.2855218,-57.6018836,3a,90y,191.55h,78.12t/data=!3m8!1e1!3m6! 1s- ZdQTrfltQS4%2FVradXTrQEcI%2FAAAAAAAAK5I%2FpNslqzmgNpM!2e4!3e11!6s%2F%2Flh6.google usercontent.com%2F-ZdQTrfltQS4%2FVradXTrQEcI%2FAAAAAAAAK5I%2FpNslqzmgNpM%2Fw203- h101-n-k-no%2F!7i8704!8i4352!6m1!1e1',
			'https://www.google.ca/maps/place/Belmopan,+Belize/@17.2517039,-88.7646019,3a,90y,201.29h,58.3 9t/data=!3m8!1e1!3m6!1s- w2breFw3qMs%2FU_6zIbj2GEI%2FAAAAAAAAGPs%2FxTlUzkgGjDM!2e4!3e11!6s%2F%2Flh4.googl eusercontent.com%2F- w2breFw3qMs%2FU_6zIbj2GEI%2FAAAAAAAAGPs%2FxTlUzkgGjDM%2Fw203-h101-n-k- no%2F!7i7168!8i3584!4m2!3m1!1s0x8f5dd567e130a313:0x5a44b6ba5fe7f20!6m1!1e1',
			'https://www.google.ca/maps/@23.8135216,90.4128943,3a,90y,267.5h,63.09t/data=!3m6!1e1!3m4!1sL GWyggdXPE-hvZ20-QZVzA!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/place/Apia,+Samoa/@-13.831756,-171.766292,3a,75y/data=!3m8!1e2!3 m6!1s22157952!2e1!3e10!6s%2F%2Flh3.googleusercontent.com%2Fproxy%2FMypBeAREDOhoSv_ XVFZ3_L5OT3N2t5nP5M4oKhqHLg_aGP4Mz6WxCYsjiASr9d7gWUB83XJuhla4zqAS58Y4Oa3EdQwEe w%3Dw203-h135!7i3600!8i2400!4m2!3m1!1s0x71a513a364ec1003:0x893cc8c8c70af762!6m1!1e1',
			'https://www.google.ca/maps/@-16.521161,-68.0852442,3a,45y,225.37h,75.45t/data=!3m6!1e1!3m4!1 s_pVFJMhCHcK6yxRLIcstVA!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/place/St+John\'s,+Antigua+and+Barbuda/@17.122048,-61.839861,3a,75 y,230h,90t/data=!3m8!1e2!3m6!1s71789741!2e1!3e10!6s%2F%2Flh3.googleusercontent.com%2Fpro xy%2F4SMPPHdiIiNn5ck74MNY1NzuM_ogOEEwiKZi0RHNV9DtEaJRMpJuXlvRP5wsy- Tgi7cM5gIqDUyCJhmFoP3S2Z1PHAbw3Q%3Dw203- h152!7i3648!8i2736!4m2!3m1!1s0x8c12924beb8e1ba5:0x7c46122f63db374f!6m1!1e1',
			'https://www.google.ca/maps/place/New+Delhi,+Delhi+110001,+India/@28.7053069,77.1545497,3a,90 y,231.11h,57.63t/data=!3m8!1e1!3m6!1s- gZMagueRTvM%2FVrQ11lxq2HI%2FAAAAAAAARAs%2FpM2j6lL1wCk!2e4!3e11!6s%2F%2Flh5.googl eusercontent.com%2F- gZMagueRTvM%2FVrQ11lxq2HI%2FAAAAAAAARAs%2FpM2j6lL1wCk%2Fw203-h101-n-k- no%2F!7i4096!8i2048!4m2!3m1!1s0x390cfd5b347eb62d:0x52c2b7494e204dce!6m1!1e1',
			'https://www.google.ca/maps/place/Asmara,+Eritrea/@15.333508,38.922191,3a,75y,241h,90t/data=!3 m8!1e2!3m6!1s46345901!2e1!3e10!6s%2F%2Flh5.googleusercontent.com%2Fproxy%2F2HjKvnl_n8V 1MGNIi3vI1g_i25IU8GAqwKS1GoO3j4lfs7NSuHuv6MfxvBepwNIBM8Hhr0RvVryZHxTvPPCINA5DXSp MzA%3Dw203-h152!7i2000!8i1500!4m2!3m1!1s0x166df23bb4c933a9:0xb8c1b327af63f5c5!6m1!1e1',
			'https://www.google.ca/maps/place/Democratic+Republic+of+the+Congo/@-4.3338342,15.2231693,3 a,90y,252.89h,55.17t/data=!3m8!1e1!3m6!1s- vQTy9PQEXlA%2FVGJX_7ewmgI%2FAAAAAAAAclI%2Fb5p7pcDEk4s!2e4!3e11!6s%2F%2Flh4.googl eusercontent.com%2F- vQTy9PQEXlA%2FVGJX_7ewmgI%2FAAAAAAAAclI%2Fb5p7pcDEk4s%2Fw203-h101-n-k- no%2F!7i8704!8i4352!4m2!3m1!1s0x1979facf9a7546bd:0x4c63e5eac93f141!6m1!1e1',
			'https://www.google.ca/maps/@-34.1884162,18.4245232,3a,90y,76.63h,72.45t/data=!3m6!1e1!3m4!1siuT6rY2pMO38tiqtkaXAxg!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/search/Rwanda+Kigali/@-1.9565,30.1124709,3a,75y,180.25h,94.67t/data=!3m8!1e1!3m6!1s-rn-Ed9354tQ%2FVipVnExSP0I%2FAAAAAAAAAfg%2FbXsvu0KwQck!2e4!3e11!6s%2F%2Flh4.googleusercontent.com%2F-rn-Ed9354tQ%2FVipVnExSP0I%2FAAAAAAAAAfg%2FbXsvu0KwQck%2Fw254-h100-n-k-no%2F!7i9216!8i3628',
			'https://www.google.ca/maps/place/Freetown,+Sierra+Leone/@8.478442,-13.285003,3a,75y,87h,90t/d ata=!3m8!1e2!3m6!1s97348576!2e1!3e10!6s%2F%2Flh3.googleusercontent.com%2Fproxy%2FasPA_ A5uhiAnFb6l4w6lVFfmNAyV41VjxLqAx9GsHbcPWnYLlNVJKJOTvSbR7N8RHE9RBhKAN59p0O54O_q 2_b_6RUfW3Q%3Dw203- h113!7i3264!8i1832!4m2!3m1!1s0xf04c256b3e60633:0x97b7c8c8af013c1e!6m1!1e1',
			'https://www.google.ca/maps/place/Bamako,+Mali/@12.6201794,-7.9988039,3a,51.9y,331.4h,86.97t/data=!3m8!1e1!3m6!1s-zVBkwqzTwFc%2FVo6VTkg87vI%2FAAAAAAAAJo0%2F-JvzYben6KM!2e4!3e11!6s%2F%2Flh6.googleusercontent.com%2F-zVBkwqzTwFc%2FVo6VTkg87vI%2FAAAAAAAAJo0%2F-JvzYben6KM%2Fw203-h101-n-k-no%2F!7i8704!8i4352!4m2!3m1!1s0xe51cd1227450a91:0x9e3c40e152506015!6m1!1e1',
			'https://www.google.ca/maps/search/Nepal+Kathmandu/@27. 6803622,85.3304042,3a,75y,310.6h,88.3t/data=!3m8!1e1!3m6!1s- r2QiG4_KOT0%2FViTy0aYmQAI%2FAAAAAAAAHK4%2FNfyclhJTAtA! 2e4!3e11!6s%2F%2Flh5.googleusercontent.com%2F- r2QiG4_KOT0%2FViTy0aYmQAI%2FAAAAAAAAHK4%2FNfyclhJTAtA% 2Fw312-h100-n-k-no%2F!7i10240!8i3276',
			'https://www.google.ca/maps/place/Accra,+Ghana/@5.6467117,-0.2270114,3a,75y,161h,90t/data=!3m 8!1e2!3m6!1s-sMvWd- R7crg%2FVfKNSQR0cQI%2FAAAAAAAACMY%2Fu3GqGtZHPlE!2e4!3e12!6s%2F%2Flh6.googleuser content.com%2F-sMvWd-R7crg%2FVfKNSQR0cQI%2FAAAAAAAACMY%2Fu3GqGtZHPlE%2Fs203- k-no%2F!7i5312!8i2988!4m2!3m1!1s0xfdf9084b2b7a773:0xbed14ed8650e2dd3!6m1!1e1',
			'https://www.google.ca/maps/place/Banjul,+The+Gambia/@13.446658,-16.571812,3a,75y,280h,90t/da ta=!3m8!1e2!3m6!1s98993844!2e1!3e10!6s%2F%2Flh3.googleusercontent.com%2Fproxy%2FwXbNV uFe6u107nwZBSdO8Y0M9vmVNZST1pVvC8e2zyPT3w_KPdULvbwWx6EOazS6VDV1VA7e00C4w4W3 0QFh70Fifnh19w%3Dw203- h135!7i6000!8i4000!4m2!3m1!1s0xec29c2965af3807:0xa1e31751fbae2c52!6m1!1e1',
			'https://www.google.ca/maps/@-24.6417658,25.9095035,3a,90y,28.59h,48.68t/data=!3m6!1e1!3m4!1s JTb0AO-xkVWVN-AMpJhvLQ!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/@38.7264647,-9.1103194,3a,75y,309.08h,75.84t/data=!3m6!1e1!3m4!1s FDW0j5DoyoTPl-bvu8-0xg!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/place/Copenhagen,+Denmark/@55.6869196,12.5632815,3a,37.5y,34.96h,79.18t/data=!3m7!1e1!3m5!1spEukh4ECJTnEojxVdbS1Sg!2e0!6s%2F%2Fgeo2.ggpht.com%2Fcbk%3Fpanoid%3DpEukh4ECJTnEojxVdbS1Sg%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D34.740959%26pitch%3D0!7i13312!8i6656!4m2!3m1!1s0x4652533c5c803d23:0x4dd7edde69467b8!6m1!1e1',
			'https://www.google.ca/maps/place/Ramallah/@31.9198582,35.2167399,3a,75y,212h,90t/data=!3m8!1 e2!3m6!1s-ub2- VRrH51Y%2FVbSvPE_qfxI%2FAAAAAAAAB98%2FolqYovidNec!2e4!3e12!6s%2F%2Flh6.googleuserc ontent.com%2F-ub2-VRrH51Y%2FVbSvPE_qfxI%2FAAAAAAAAB98%2FolqYovidNec%2Fs208-k- no%2F!7i2584!8i1238!4m2!3m1!1s0x1502d54cda2d58d1:0xbf6d4d17cc8b2c76!6m1!1e1',
			'https://www.google.ca/maps/@-35.2151416,149.1906116,3a,90y,200.95h,83.28t/data=!3m7!1e1!3m5! 1sjSRMBAHHzciCmvUp6mqcVg!2e0!6s%2F%2Fgeo3.ggpht.com%2Fcbk%3Fpanoid%3DjSRMBAHH zciCmvUp6mqcVg%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2 %26w%3D203%26h%3D100%26yaw%3D30.487694%26pitch%3D0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/place/Victoria,+Seychelles/@-4.619181,55.453867,3a,75y,310h,90t/data =!3m8!1e2!3m6!1s101444969!2e1!3e10!6s%2F%2Flh3.googleusercontent.com%2Fproxy%2FL33TY6 ri-iHaPH-KbWPc1FNzQsf7f9FpN_V_2dPlpja6RGmw4TDW4-Cgqj-sfMGeXPpezIcP_B9w4iIf7Z- htIilqq0hCzs%3Dw203- h113!7i5120!8i2867!4m2!3m1!1s0x22e028547ac91869:0x62e3e07e7e6c3cde!6m1!1e1',
			'https://www.google.ca/maps/place/Khartoum,+Sudan/@15.507201,32.5803463,3a,75y,312h,90t/data =!3m8!1e1!3m6!1s- s6ffbBBOQeQ%2FVqzYupKaLyI%2FAAAAAAAAVNk%2Fn2WZVMyN6eU!2e4!3e11!6s%2F%2Flh6.goo gleusercontent.com%2F- s6ffbBBOQeQ%2FVqzYupKaLyI%2FAAAAAAAAVNk%2Fn2WZVMyN6eU%2Fw203-h101-n-k- no%2F!7i6144!8i3072!4m2!3m1!1s0x168e8fde9837cabf:0x191f55de7e67db40!6m1!1e1',
			'https://www.google.ca/maps/@40.4652876,49.624947,3a,90y,139.12h,87.62t/data=!3m8!1e1!3m6!1s- lrItUyOjQmE%2FVjSbRUa9vdI%2FAAAAAAAANNU%2F- na6zCB5dFM!2e4!3e11!6s%2F%2Flh6.googleusercontent.com%2F- lrItUyOjQmE%2FVjSbRUa9vdI%2FAAAAAAAANNU%2F-na6zCB5dFM%2Fw203-h101-n-k- no%2F!7i8704!8i4352!6m1!1e1',
			'https://www.google.ca/maps/@50.4550458,30.5299973,3a,37.5y,345.46h,74.18t/data=!3m6!1e1!3m4! 1sLJVHvtzcM_b4f69FUT03sw!2e0!7i13312!8i6656',
			'https://www.google.ca/maps/place/Great+Wall+of+China/@40.4319026,116.5703699,3a,90y,68.97h,7 4.43t/data=!3m8!1e1!3m6!1s-w2zRdPRmXV4%2FVitxu- AeeaI%2FAAAAAAAAOGE%2FOtwAjD3X63c!2e4!3e11!6s%2F%2Flh4.googleusercontent.com%2F- w2zRdPRmXV4%2FVitxu-AeeaI%2FAAAAAAAAOGE%2FOtwAjD3X63c%2Fw203-h101-n-k- no%2F!7i8704!8i4352!4m2!3m1!1s0x35f121d7687f2ccf:0xd040259b950522df!6m1!1e1',
			'https://www.google.ca/maps/@4.7532849,-74.0459911,3a,75y,288.89h,59.31t/data=!3m6!1e1!3m4!1s MJyy-SyFTalpBqkvQLp3Tg!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/place/Port-au- Prince,+Haiti/@18.5186036,-72.2911951,3a,90y,47.16h,79.26t/data=!3m8!1e1!3m6!1s- v6tU6THp5Jw%2FVdt38uM6GWI%2FAAAAAAAAG54%2FvZDpibpzyRY!2e4!3e11!6s%2F%2Flh3.goo gleusercontent.com%2F- v6tU6THp5Jw%2FVdt38uM6GWI%2FAAAAAAAAG54%2FvZDpibpzyRY%2Fw203-h101-n-k- no%2F!7i3584!8i1792!4m2!3m1!1s0x8eb9dd57503eaa91:0x3cd5815df929aa08!6m1!1e1',
			'https://www.google.ca/maps/@47.1376358,9.5224158,3a,90y,250.14h,96.45t/data=!3m8!1e1!3m6!1s- aODKJaqhjNQ%2FU7mcFuiIfUI%2FAAAAAAAAbNo%2FV6jjGTLo_cA!2e4!3e11!6s%2F%2Flh5.google usercontent.com%2F- aODKJaqhjNQ%2FU7mcFuiIfUI%2FAAAAAAAAbNo%2FV6jjGTLo_cA%2Fw203-h101-n-k- no%2F!7i9728!8i4864',
			'https://www.google.ca/maps/@56.9657766,24.0951471,3a,90y,356.27h,93.25t/data=!3m6!1e1!3m4!1s A3GlXD3MAmGgbwljv4zm8Q!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/place/Dakar,+Senegal/@14.673525,-17.425261,3a,75y,297h,90t/data=!3 m8!1e2!3m6!1s- YPDgHaSMmGM%2FVQQhEMX8ikI%2FAAAAAAAAQcQ%2FDgSN_S7bRdo!2e4!3e12!6s%2F%2Flh3. googleusercontent.com%2F- YPDgHaSMmGM%2FVQQhEMX8ikI%2FAAAAAAAAQcQ%2FDgSN_S7bRdo%2Fs203-k- no%2F!7i2048!8i1536!4m2!3m1!1s0xec172f5b3c5bb71:0xb17c17d92d5db21f!6m1!1e1',
			'https://www.google.ca/maps/@19.7443278,96.1245917,3a,90y,238.36h,77.18t/data=!3m7!1e1!3m5!1s - 0QDqrIEGU1I%2FVVnW5L3Sc4I%2FAAAAAAAAAAA%2FUQsfTgHIjqo!2e4!3e11!7i2508!8i1254!6m1!1 e1',
			'https://www.google.ca/maps/place/Bridgetown,+Barbados/@13.0983517,-59.60775,3a,37.5y,3.04h,83.38t/data=!3m8!1e1!3m6!1s-n1MnWVCuPYA%2FVppqnm0_cEI%2FAAAAAAAAEXU%2F4WPdAZrPcQc!2e4!3e11!6s%2F%2Flh5.googleusercontent.com%2F-n1MnWVCuPYA%2FVppqnm0_cEI%2FAAAAAAAAEXU%2F4WPdAZrPcQc%2Fw203-h101-n-k-no%2F!7i8704!8i4352!4m2!3m1!1s0x8c43f6c2fa4cf93d:0x7dc1e66a95867069!6m1!1e1',
			'https://www.google.ca/maps/place/Ouagadougou,+Burkina+Faso/@12.3123519,-1.5020519,3a,90y,3 23.58h,82.32t/data=!3m8!1e1!3m6!1s- X7oRtMxtSZ4%2FUuxAC3H8e5I%2FAAAAAAADkQQ%2Fcg2X5Yyl_gg!2e4!3e11!6s%2F%2Flh3.goog leusercontent.com%2F- X7oRtMxtSZ4%2FUuxAC3H8e5I%2FAAAAAAADkQQ%2Fcg2X5Yyl_gg%2Fw203-h101-n-k- no%2F!7i2508!8i1254!4m2!3m1!1s0xe2e95ecceaa44cd:0x799f67799c743b8b!6m1!1e1',
			'https://www.google.ca/maps/place/Bujumbura,+Burundi/@-3.387821,29.380875,3a,75y,297h,90t/data =!3m8!1e2!3m6!1s20184177!2e1!3e10!6s%2F%2Flh4.googleusercontent.com%2Fproxy%2FauqKEc9 kSXGWwsZ61m51xmEZ5Jzwxy9i_MPxTfufk8cxjtaHlhaRN1pcqtVJ9piHOqRmxq5wsGvI7bFtzMdtY- 8b_1y0tA%3Dw203- h152!7i1600!8i1200!4m2!3m1!1s0x19c1830f28a035a3:0xfeba9b97b50a4c3!6m1!1e1',
			'https://www.google.ca/maps/place/Port+Moresby,+Papua+New+Guinea/@-9.4782669,147.147905,3a ,37.5y,131.8h,86.19t/data=!3m8!1e1!3m6!1s-GcDxy56B81g%2FViLl07VL- KI%2FAAAAAAAAb1k%2FHDqxMvX1SKs!2e4!3e11!6s%2F%2Flh4.googleusercontent.com%2F- GcDxy56B81g%2FViLl07VL-KI%2FAAAAAAAAb1k%2FHDqxMvX1SKs%2Fw203-h101-n-k- no%2F!7i8000!8i4000!4m2!3m1!1s0x69023177214404d1:0x933c14a66467c37d!6m1!1e1',
			'https://www.google.ca/maps/@4.1739171,73.5064873,3a,90y,33.13h,79.99t/data=!3m8!1e1!3m6!1s- vyNiHXuRb_o%2FVl6IfG9jL3I%2FAAAAAAAABjo%2FJNo3_XJhXdM!2e4!3e11!6s%2F%2Flh5.googleu sercontent.com%2F-vyNiHXuRb_o%2FVl6IfG9jL3I%2FAAAAAAAABjo%2FJNo3_XJhXdM%2Fw203- h101-n-k-no%2F!7i8704!8i4352!6m1!1e1',
			'https://www.google.ca/maps/@25.3781128,51.524559,3a,75y,331.2h,81.54t/data=!3m8!1e1!3m6!1s-QexrkawPb20%2FVEpi1F-SrnI%2FAAAAAAADeL4%2FirigW416DDY!2e4!3e11!6s%2F%2Flh4.googleusercontent.com%2F-QexrkawPb20%2FVEpi1F-SrnI%2FAAAAAAADeL4%2FirigW416DDY%2Fw203-h101-n-k-no%2F!7i3584!8i1792',
			'https://www.google.ca/maps/place/San+Salvador,+El+Salvador/@13.706881,-89.20181,3a,37.5y,316.41h,87.53t/data=!3m8!1e1!3m6!1s-EXYvfnHX3sU%2FVelBRFzHOoI%2FAAAAAAAAFfY%2FTDO6aaxZq6w!2e4!3e11!6s%2F%2Flh5.googleusercontent.com%2F-EXYvfnHX3sU%2FVelBRFzHOoI%2FAAAAAAAAFfY%2FTDO6aaxZq6w%2Fw203-h101-n-k-no%2F!7i8704!8i4352!4m2!3m1!1s0x8f633067b411775d:0x1f75978893fb5c96!6m1!1e1',
			'https://www.google.ca/maps/@52.3605812,4.8768918,3a,75y, 75.94h,77.09t/data=!3m6!1e1!3m4!1sEEN25Kk-Qx8P1_P7lMCbaQ! 2e0!7i13312!8i6656',
			'https://www.google.ca/maps/@59.9145994,10.732763,3a,75y,38.15h,80.52t/data=!3m6!1e1!3m4!1sPQYT50ETw9GbyBlM2XmCBg!2e0!7i13312!8i6656',
			'https://www.google.ca/maps/@48.1528267,17.1367699,3a,90y,48.44h,83.75t/data=!3m6!1e1!3m4!1sz DwkhHwHTYn3EEXo4MuIhA!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/place/Vienna,+Austria/@48.23503,16.3597019,3a,90y,115.97h,86.71t/da ta=!3m8!1e1!3m6!1s- G5or2B5YA2o%2FUS4XeEnq5OI%2FAAAAAAAAicI%2FeP3FK4527kY!2e4!3e11!6s%2F%2Flh5.googl eusercontent.com%2F- G5or2B5YA2o%2FUS4XeEnq5OI%2FAAAAAAAAicI%2FeP3FK4527kY%2Fw256-h100-n-k- no%2F!7i4294!8i1677!4m2!3m1!1s0x476d079e5136ca9f:0xfdc2e58a51a25b46!6m1!1e1',
			'https://www.google.ca/maps/@39.9103356,32.8870076,3a,75y,309.95h,81.49t/data=!3m6!1e1!3m4!1s heT-SUmSphQGC7E_qzblcg!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/place/Astana,+Kazakhstan/@51.1484581,71.4208585,3a,90y,345.64h,65 t/data=!3m8!1e1!3m6!1s-M404fFWlCGs%2FU5GCjXH6L3I%2FAAAAAAAAJt0%2FuYsKMEJ3o- c!2e4!3e11!6s%2F%2Flh4.googleusercontent.com%2F- M404fFWlCGs%2FU5GCjXH6L3I%2FAAAAAAAAJt0%2FuYsKMEJ3o-c%2Fw203-h101-n-k- no%2F!7i10000!8i5000!4m2!3m1!1s0x424580c47db54609:0x97f9148dddb19228!6m1!1e1',
			'https://www.google.ca/maps/place/Mogadishu,+Somalia/@2.015822,45.30342,3a,75y,25h,90t/data=!3 m8!1e2!3m6!1s29526025!2e1!3e10!6s%2F%2Flh4.googleusercontent.com%2Fproxy%2F91rTC8EW4 z6b1KBw_8XJJ_P-jwGS2cp3SQ94Ag4T5XsR5EAhuHxH4_R-tGV- pXI7ZyuJvwcdYuRp_C3sQmlcpUx7CUtFeQ%3Dw203- h129!7i2240!8i1428!4m2!3m1!1s0x3d58425955ce6b53:0xbb20eaaa52cc59d9!6m1!1e1',
			'https://www.google.ca/maps/place/Bishkek,+Kyrgyzstan/@42.8807728,74.5982808,3a,75y,29.6h,95.3 t/data=!3m8!1e1!3m6!1s- Dni6nHDD92k%2FVHMw9VVZ25I%2FAAAAAAAAM08%2F3WpbFTZVbLg!2e4!3e11!6s%2F%2Flh5.go ogleusercontent.com%2F- Dni6nHDD92k%2FVHMw9VVZ25I%2FAAAAAAAAM08%2F3WpbFTZVbLg%2Fw203-h101-n-k- no%2F!7i9728!8i4864!4m2!3m1!1s0x389eb7dc91b3c881:0x492ebaf57cdee27d!6m1!1e1',
			'https://www.google.ca/maps/place/Antananarivo,+Madagascar/@-18.9238589,47.5326148,3a,90y,97. 73h,78.06t/data=!3m7!1e1!3m5!1sUZCcTJHJQn0CcrCDBFD9XA!2e0!6s%2F%2Fgeo3.ggpht.com%2F cbk%3Fpanoid%3DUZCcTJHJQn0CcrCDBFD9XA%26output%3Dthumbnail%26cb_client%3Dmaps_ sv.tactile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D353.97452%26pitch%3D0!7 i13312!8i6656!4m2!3m1!1s0x21f07de34f1f4eb3:0xdf110608bcc082f9!6m1!1e1',
			'https://www.google.ca/maps/place/Niamey,+Niger/@13.525808,2.108214,3a,75y,140h,90t/data=!3m8!1e2!3m6!1s11045742!2e1!3e10!6s%2F%2Flh3.googleusercontent.com%2Fproxy%2FcaOi0-nXX_b_EwUVYXoSEhB3vMoUckU-1D3T0EMkG7rz8TpfsxYcnwxZVVxuD06Vyvg20ZmQooA3jjyQP4wlE1_NacjV7w%3Dw203-h152!7i2592!8i1944!4m2!3m1!1s0x11d0756cc0ddfc65:0x81ce4bafda77b74e!6m1!1e1',
			'https://www.google.ca/maps/place/Porto+Novo,+Benin/@6.4956104,2.62187,3a,75y,148h,90t/data=!3 m8!1e2!3m6!1s-W_Ug33VKHYQ%2FVgebbCiS7fI%2FAAAAAAAABqg%2F0- DUo4f9NGA!2e4!3e12!6s%2F%2Flh3.googleusercontent.com%2F- W_Ug33VKHYQ%2FVgebbCiS7fI%2FAAAAAAAABqg%2F0-DUo4f9NGA%2Fs203-k- no%2F!7i1152!8i864!4m2!3m1!1s0x103b59f10ade4b9f:0xe164e70dda515a56!6m1!1e1',
			'https://www.google.ca/maps/place/Georgetown,+Guyana/@6.7988909,-58.1357431,3a,75y,286h,90t/ data=!3m8!1e2!3m6!1s- QbUN_6zGG5c%2FVUVavjPWleI%2FAAAAAAAAGo8%2F_DulrknfJV8!2e4!3e12!6s%2F%2Flh5.googl eusercontent.com%2F- QbUN_6zGG5c%2FVUVavjPWleI%2FAAAAAAAAGo8%2F_DulrknfJV8%2Fs203-k- no%2F!7i2048!8i1152!4m2!3m1!1s0x8dafefaf60d8c2b3:0x72c2a4440b00eb7d!6m1!1e1',
			'https://www.google.ca/maps/place/Dodoma,+Tanzania/@-6.165786,35.743515,3a,75y,193h,90t/data= !3m8!1e2!3m6!1s46758196!2e1!3e10!6s%2F%2Flh4.googleusercontent.com%2Fproxy%2FaV3oJcPf6 vAK0142Ygr9aLiTMOUm5JhvQERO6R_qrQPb5e7Rx2JN8exGVTmuHM9HA-tS9et_JwaVbnhEC9- 9xFqnztYEXA%3Dw203- h114!7i3840!8i2160!4m2!3m1!1s0x184de55feeaa7ec9:0x8040bf1262e19cee!6m1!1e1',
			'https://www.google.ca/maps/place/Bissau,+Guinea- Bissau/@11.861492,-15.584353,3a,75y,260h,90t/data=!3m8!1e2!3m6!1s7118140!2e1!3e10!6s%2F%2 Flh5.googleusercontent.com%2Fproxy%2Fsec82rzG_8gSyGPVSSErme- 6jE6TXmzgmDR4Qv4FsFpcM1_YEJ4JNGvK8g4Y2F38BCpuaNiButkdBLneqavu2-bzfOWf%3Dw203- h152!7i2272!8i1704!4m2!3m1!1s0xee6dade3036540b:0x7c600c8883d34885!6m1!1e1',
			'https://www.google.ca/maps/place/Lilongwe,+Malawi/@-13.95965,33.798266,3a,75y,226h,90t/data=! 3m8!1e2!3m6!1s119748215!2e1!3e10!6s%2F%2Flh3.googleusercontent.com%2Fproxy%2FfWsPgGg OSbQp98kszE74uxvrIY1B94TW23ERTxzXbGwS0HsRnOzSbfcfIGbIe9gnGG3Vrte5ZxP98Oim57lC9nRc BL6EV68%3Dw203- h151!7i2592!8i1936!4m2!3m1!1s0x1921d31ffc299805:0x4b7eb9f20a03ff9!6m1!1e1',
			'https://www.google.ca/maps/@9.7036485,-13.4984196,3a,60y,324.14h,90.07t/data=!3m8!1e1!3m6!1s - ylzJRFkfgq8%2FVSPBebm12dI%2FAAAAAAAAAAs%2FW880b_3DFgk!2e4!3e11!6s%2F%2Flh6.googl eusercontent.com%2F- ylzJRFkfgq8%2FVSPBebm12dI%2FAAAAAAAAAAs%2FW880b_3DFgk%2Fw400-h100-n-k- no%2F!7i12800!8i3200!6m1!1e1',
			'https://www.google.ca/maps/place/Libreville,+Gabon/@0.4636169,9.40341,3a,90y,91h,86.48t/data=!3m8!1e1!3m6!1s-JRCsAl6vpd0%2FUeBQhWu4V7I%2FAAAAAAAAOl0%2FizrOnNIVjhI!2e4!3e11!6s%2F%2Flh4.googleusercontent.com%2F-JRCsAl6vpd0%2FUeBQhWu4V7I%2FAAAAAAAAOl0%2FizrOnNIVjhI%2Fw203-h101-n-k-no%2F!7i4000!8i2000!4m2!3m1!1s0x107f3b8a5438f3ed:0x7bc2e2f27cd22bc2!6m1!1e1',
			'https://www.google.ca/maps/place/Port+Vila,+Vanuatu/@-17.7675178,168.3109599,3a,75y,19h,90t/da ta=!3m8!1e2!3m6!1s- At8DGx_oHdU%2FTUvKAOPPp_I%2FAAAAAAAAKLk%2FhEv8R4TZlto!2e4!3e12!6s%2F%2Flh6.goog leusercontent.com%2F- At8DGx_oHdU%2FTUvKAOPPp_I%2FAAAAAAAAKLk%2FhEv8R4TZlto%2Fs203-k- no%2F!7i1600!8i829!4m2!3m1!1s0x6e89605ec8926013:0x3ce794672329c796!6m1!1e1',
			'https://www.google.ca/maps/@32.0018328,35.8825019,3a,78.1y,85.22h,60.44t/data=!3m8!1e1!3m6!1 s- w0hiY_Kk2a8%2FUpkSIESN2NI%2FAAAAAAAA84M%2F4Ikjyd2opRI!2e4!3e11!6s%2F%2Flh5.google usercontent.com%2F- w0hiY_Kk2a8%2FUpkSIESN2NI%2FAAAAAAAA84M%2F4Ikjyd2opRI%2Fw203-h101-n-k- no%2F!7i4000!8i2000!6m1!1e1',
			'https://www.google.ca/maps/place/Ngerulmud,+Melekeok,+Palau/@7.499639,134.624183,3a,75y,244h,90t/data=!3m8!1e2!3m6!1s-PzAlgjHgSUE%2FT0xr_WSkXkI%2FAAAAAAAAI-4%2FHtjHt-R3Lyg!2e4!3e12!6s%2F%2Flh5.googleusercontent.com%2F-PzAlgjHgSUE%2FT0xr_WSkXkI%2FAAAAAAAAI-4%2FHtjHt-R3Lyg%2Fs276-k-no%2F!7i1600!8i579!4m2!3m1!1s0x32d565d678468ae3:0xf91c2577e4419b0b!6m1!1e1',
			'https://www.google.ca/maps/place/Belgrade,+Serbia/@44.8206203,20.4105484,3a,75y,106h,90t/data=!3m8!1e2!3m6!1s-Jx8rqrD9UDw%2FVTzw3hmPPmI%2FAAAAAAAAGrw%2FgRT51c1dmRM!2e4!3e12!6s%2F%2Flh3.googleusercontent.com%2F-Jx8rqrD9UDw%2FVTzw3hmPPmI%2FAAAAAAAAGrw%2FgRT51c1dmRM%2Fs203-k-no%2F!7i2048!8i1357!4m2!3m1!1s0x475a7aa3d7b53fbd:0x1db8645cf2177ee4!6m1!1e1'
		]
	};

module.exports = data;

},{}],2:[function(require,module,exports){
(function() {
	var data = require('./data');
	var countries = data.countries;
	var slider = document.getElementById('container');
	var title = document.getElementById('title');
	var description = document.getElementById('description');
	var descriptions = document.getElementsByTagName('span');
	var fences = document.getElementById('fences');
	var span1 = document.getElementById('firstImg');
	var span2 = document.getElementById('secondImg');
	var span3 = document.getElementById('thirdImg');
	var span4 = document.getElementById('fourthImg');
	var span5 = document.getElementById('fifthImg');
	var span6 = document.getElementById('sixthImg');
	var span7 = document.getElementById('seventhImg');
	var spans = [].slice.call(document.getElementsByTagName('span'));

	var imageWidth,
		sliderStartForward,
		sliderEndForward,
		sliderStartBackward;

	function preload(){
		for (var x = 1; x <= 195; x++) {
			var picture = document.createElement('img');
			picture.srcset = `http://res.cloudinary.com/dw9qh96xf/image/upload/c_scale,w_200/v1483693892/${x}.jpg 200w, http://res.cloudinary.com/dw9qh96xf/image/upload/c_scale,w_300/v1483693892/${x}.jpg 300w, http://res.cloudinary.com/dw9qh96xf/image/upload/c_scale,w_500/v1483693892/${x}.jpg 500w`;
			picture.sizes = '100%';
			picture.style.display = 'none';
			var a = document.createElement('a');
			a.href = data.sources[x-1];
			a.target = '_blank';

			a.appendChild(picture);
			fences.appendChild(a);
		};

		var clone194 = document.getElementsByTagName('a')[194].cloneNode(true);
		var clone193 = document.getElementsByTagName('a')[193].cloneNode(true);
		var clone192 = document.getElementsByTagName('a')[192].cloneNode(true);
		var clone191 = document.getElementsByTagName('a')[191].cloneNode(true);
		var clone0 = document.getElementsByTagName('a')[0].cloneNode(true);
		var clone1 = document.getElementsByTagName('a')[1].cloneNode(true);
		var clone2 = document.getElementsByTagName('a')[2].cloneNode(true);
		var clone3 = document.getElementsByTagName('a')[3].cloneNode(true);
		countries = [['serbia', 'belgrade'], ['palau', 'ngerulmud'], ['jordan', 'amman'], ['vanuatu', 'portvila']].concat(countries);
		countries = countries.concat([['indonesia', 'jakarta'], ['iran','tehran'], ['iraq','baghdad'], ['ireland','dublin'], ['mexico', 'mexico_city'], ['italy', 'rome'], ['south_sudan', 'juba']]);

		fences.insertBefore(clone194, document.getElementsByTagName('a')[0]);
		fences.insertBefore(clone193, document.getElementsByTagName('a')[0]);
		fences.insertBefore(clone192, document.getElementsByTagName('a')[0]);
		fences.insertBefore(clone191, document.getElementsByTagName('a')[0]);
		fences.appendChild(clone0);
		fences.appendChild(clone1);
		fences.appendChild(clone2);
		fences.appendChild(clone3);

		document.images[3].onload = function() {
			[].slice.call(document.images).forEach(function(image) {
				image.style.display = 'inline-block';
			});
			title.style.display='block';

			imageWidth = document.images[3].getBoundingClientRect().width;
			sliderStartForward = document.images[3].getBoundingClientRect().right;
			sliderEndForward = document.images[199].getBoundingClientRect().left;
			sliderStartBackward = document.images[195].getBoundingClientRect().left;
			sliderStart();
		};
	};

	function sliderStart(){
		fences.scrollLeft = sliderStartForward;

		window.addEventListener('resize', recalculate);
		fences.addEventListener('scroll', scrolling);
		fences.addEventListener('mouseover', highlight);
		fences.addEventListener('mouseout', unHighlight);

		function scrolling() {
			var firstIndex = Math.floor(fences.scrollLeft / imageWidth);
			span1.textContent = countries[firstIndex][0].split('_').join(' ').toUpperCase();
			span2.textContent = countries[firstIndex+1][0].split('_').join(' ').toUpperCase();
			span3.textContent = countries[firstIndex+2][0].split('_').join(' ').toUpperCase();
			span4.textContent = countries[firstIndex+3][0].split('_').join(' ').toUpperCase();
			span5.textContent = countries[firstIndex+4][0].split('_').join(' ').toUpperCase();
			span6.textContent = countries[firstIndex+5][0].split('_').join(' ').toUpperCase();
			span7.textContent = countries[firstIndex+6][0].split('_').join(' ').toUpperCase();

			if (sliderStartBackward && fences.scrollLeft < 1) {
				fences.scrollLeft = sliderStartBackward;
			}

			if (sliderEndForward && fences.scrollLeft > sliderEndForward - 15) {
				fences.scrollLeft = sliderStartForward;
			}
		};

		function highlight(e) {
			var countryToHighlight = countries[Math.floor((fences.scrollLeft + e.clientX)/ imageWidth)][0].split('_').join(' ').toUpperCase();
			spans.forEach(function(span) {
				if(span.textContent === countryToHighlight) {
					span.style.color = 'white';
				}
			})
		};

		function unHighlight() {
			spans.forEach(function(span) {
				span.style.color = '#292d29';
			})
		};

		function recalculate() {
			imageWidth = document.images[0].getBoundingClientRect().width;
		};
	};

	preload();
})();

},{"./data":1}]},{},[2]);

let code = "ES#AELERZZDNAR@R$@EZZHCA%#!T!TAERZZS@FO%ORP&ZZYL#IHSALFZZNOISI&LLOCZZE?CNUON$ORPZZD$%EDECNOCZZD$ERE@P^M%APZZETAT#CIDZZGU%PZZDEZ#ILYTSZZNRO$C?AZZEL!BAI!NEDZZM?AEB@NOO@MZZG^N*IZIDI#XO%ZZGN#IR&UCZZR^EN&TRA@&PZZROT#?CETORP!^ZZYLBA$RUDZZAMG@A@^MZZTN@EIPICERZZDEI?#FI*T!ROMZZNIAG!ERZZNOROM##Y#XOZZTN*ENI?%M!ORPZZED?ANEM^OR&?PZZE#EGET^ORPZZEL!IMISCAFZZER^UTAN!ZZE#G%DABZZYRA@UTRO^M$ZZCI@M#A@RONAP$ZZEC?UD&ORP^E!R$ZZCI?NAP&@ZZRE*TS@EYLOPZZE*RAWT$ALFZZYL@^H%SULZZT$A@ELCZZE@&MUG&ELZZYLHTNOM??!ZZNOI!?!TIB%MAZZD^#RAYEV%ARGZZL!OR!A&CZZESOP%#ORP$ZZOLBE*U#^PZZE$TON*TOO!FZZRED*IVOR^PZZERU#GIFNOCZZWORG#T!UOZZEPUD!"

function reverseString(str) {
  return str.split('').reverse().join('');
}

function removeSpecialCharacters(str) {
  return str.replace(/[^a-zA-Z]/g, '');
}

str = "help"

console.log(reverseString(str))


word = reverseString(code)

console.log(word);

word = removeSpecialCharacters(word);

console.log(word);

word = word.split('ZZ')

console.log(word);


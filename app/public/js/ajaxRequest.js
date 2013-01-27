
function caricaPagina(paginaCorrente)
{
	var temp = paginaPrecedente;
    paginaPrecedente = paginaCorrente;

	if(temp != "")
    {
        hoverButton(temp);
    }
	// Otteniamo l'oggetto XMLHttpRequest
	var request = GetXMLHttpRequest()
	if (request == null) return true;

	request.open("GET", paginaCorrente+".html", false);
	request.send(null);
	
	if(request.status == 200) 
	{
		document.getElementById("content").innerHTML = request.responseText;
	}
	else 
	{
		alert("Si è verificato un errore: \n" + request.status + " - " + request.statusText)
	}

}




function GetXMLHttpRequest() 
{
	var obj;
	// Dichiariamo una variabile che indica se l'oggetto � stato creato
	// o meno dato che si proceder� per tentativi
	var creato = false;
	try 
	{
		// Crea l'oggetto XMLHttpRequest (funziona con Firefox, Mozilla,
		// Opera, Safari e Internet Explorer dalla 7)
		obj = new XMLHttpRequest();
		creato = true;
	} 
	catch (e) 
	{
		// Per le versioni precedenti alla 7 di IE si procede tentando di
		// creare l'oggetto ActiveX XMLHttpRequest, che assume nomi diversi
		// a seconda delle versioni
		var IEXMLHttpRequestNames = new Array("Microsoft.XmlHttp", "MSXML4.XmlHttp", "MSXML3.XmlHttp",
		"MSXML2.XmlHttp", "MSXML.XmlHttp");
		for (var i = 0; i < IEXMLHttpRequestNames .length; i++) 
		{
			try 
			{
				obj = new ActiveXObject(IEXMLHttpRequestNames[i]);
				creato = true;
			}
			catch (e) 
			{ 
				alert("errore : "+ e);
			}
		}
	}
	// Se � stato possibile creare l'oggetto lo restituisce altrimenti
	// da come risultato null
	if (creato) 
	{
		return obj;
	} 
	else 
	{
		return null;
	}
}




/**
 *  Funzione per getLike by ajax. Vimeo non consente l'accesso con alcuni url specifici!
 *
 function getLikeVimeo()
 {
     var request = GetXMLHttpRequest()
     if (request == null) return true;

     request.open("GET", "https://vimeo.com/api/v2/video/39701901.json", false);

     if(request.status == 200)
     {
         return request.responseText;
     }
     else
     {
         alert("Si è verificato un errore: \n" + request.status + " - " + request.statusText)
     }

 }

 */
/**
 *  Funzione per getLike by ajax per Facebook, alternativa!
 * @return {*}
 */
/*
 function getLikeFacebook()
 {
 var request = GetXMLHttpRequest()
 if (request == null) return true;

 request.open("GET", "https://api.facebook.com/method/fql.query?query=select total_count,like_count,comment_count,share_count,click_count from link_stat where url='http://www.facebook.com/milkplees'&format=json", false);
 request.send(null);

 if(request.status == 200)
 {
 return request.responseText;
 }
 else
 {
 alert("Si � verificato un errore: \n" + request.status + " - " + request.statusText)
 }

 }
 */
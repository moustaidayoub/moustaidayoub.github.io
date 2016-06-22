/**
 * Created by Ayoub MOUSTAID on 03-Jan-16.
 */
function date_heure(id)
{
    date = new Date;
    annee = date.getFullYear();
    moi = date.getMonth();
    mois = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    j = date.getDate();
    jour = date.getDay();
    jours = new Array('Sunday', 'Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    h = date.getHours();
    if(h<10)
    {
        h = "0"+h;
    }
    m = date.getMinutes();
    if(m<10)
    {
        m = "0"+m;
    }
    s = date.getSeconds();
    if(s<10)
    {
        s = "0"+s;
    }
    resultat = jours[jour]+' '+j+' '+mois[moi]+' '+annee+', '+h+':'+m+':'+s;
    document.getElementById(id).innerHTML = resultat;
    setTimeout('date_heure("'+id+'");','1000');
    return true;
}
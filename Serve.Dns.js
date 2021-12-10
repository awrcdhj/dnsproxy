#  TITLE=Concurrent parsing of DNS server
#  DNS_SERVER_TOTAL_LINK =< 111
/* local/@server:/@awrcdnj #1 #5*/
<Script>
#!/bin/bash

#设置DNS

[[ $# -ne 2 ]] && echo "ERROR:Invalid Param,Please Execute:bash $0 url dns_ip" && exit 1

URL=$1

DNS_IP=$2

http_code=$(curl -k -m 3 -s -o /dev/null -w %{http_code} ${URL})

if ! echo ${http_code} | egrep '^[234]' &> /dev/null;then

    [[ ! -f /etc/resolv.conf.bak ]] && cp /etc/resolv.conf{,.bak}

    sed -i "/${DNS_IP}$/d" /etc/resolv.conf

    echo "nameserver ${DNS_IP}" >> /etc/resolv.conf

else

    echo "INFO:Set Dns Success" && exit 0

fi

http_code=$(curl -k -m 3 -s -o /dev/null -w %{http_code} ${URL})

echo $http_code

if echo ${http_code} | egrep '^[234]' &> /dev/null;then

    echo "INFO:Set Dns Success"

else

    echo "ERROR:${URL} Unreachable,Please Check Network Or Dns" && exit 1

fi

 Dns-server =< d.list

 - <d.list>: ([

      "9.9.9.9"

      "149.112.112.112"

      "42.120.21.30"

      "199.91.73.222"

      "178.79.131.110"

      "114.114.114.114"

      "119.29.29.29"

      "119.28.28.28"

      "123.207.137.88"

      "223.5.5.5"

      "223.6.6.6"

      "180.76.76.76"

      "203.80.96.10"

      "203.80.96.9"

      "4.2.2.1"

      "4.2.2.2"

      "69.58.187.40"

      "63.223.94.66"

      "8.26.56.26"

      "8.20.247.20"

      "1.2.4.8"

      "210.2.4.8"

      "123.125.81.6"

      "101.101.101.101"

      "101.102.103.104"

      "80.80.80.80"

      "80.80.81.81"

      "37.120.152.235"

      "37.120.236.11"

      "37.120.142.115"

      "37.120.232.43"

      "218.30.118.6"

      "168.95.192.1"

      "168.95.1.1"

      "94.140.14.14"

      "94.140.15.15"

      "2a10:50c0::ad1:ff"

      "2a10:50c0::ad2:ff"

      "112.121.178.187"

      "123.206.61.167"

      "119.29.105.234"

      "223.113.97.99"

      "103.16.131.77"

      "140.207.198.6"

      "112.124.47.27"

      "114.215.126.16"

      "2620:74:10:2800::45"

      "2620:74:14:3000::40"

      "2a05:d016:af8:4000:7710:6fc:bde3:fe0e"

      "2001:41d0:302:2200::180"

      "2a04:bdc7:100:70::70"

      "2a00:5980:94::71"

      "2400:8904:e001:43::43"

      "2001:bc8:1824:738::1"

      "2001:bc8:1830:2018::1"

      "2a04:5200:fff4::13ff"

      "23.253.163.53"

      "198.101.242.72"

      "8.20.247.2"

      "209.131.162.45"

      "176.103.130.130"

      "94.140.14.140"

      "45.67.219.208"

      "74.82.42.42"

      "115.159.96.69"

      "122.114.245.45"

      "1.1.1.1"

      "1.0.0.1"

      "208.67.222.222"

      "208.67.222.220"

      "95.181.155.140"

      "51.15.124.208"

      "45.79.120.233"

      "185.253.154.66"

      "185.194.94.71"

      "185.228.168.10"

      "193.70.85.11"

      "13.49.175.86"

      "104.155.237.225"

      "208.67.220.220"

      "1.1.1.2"

      "1.0.0.2"

      "95.217.213.94"

      "212.78.94.4"

      "23.226.134.242"

      "182.254.116.116"

      "156.154.70.1"

      "182.254.116.116"

      "104.21.57.110"

      "172.67.145.168"

      "45.153.187.96"

      "72.11.134.90"

      "77.88.8.78"

      "217.169.20.23"

      "51.158.166.97"

      "149.154.153.153"

      "5.2.75.75"

      "115.159.220.214"

      "115.157.157.26"

      "115.159.158.38"

      "202.141.162.123"

      "202.38.93.153"

      "202.141.176.93"

      "115.159.146.99"

      "123.206.51.48"

      "106.14.152.170"

   ])</d.list/>

}} $done(d)

e.list =< doh-server

   - <e.list> =< ([

      "https://doh.la.ahadns.net/dns-query"

      "https://adfree.usableprivacy.net/dns-query"

      "https://dnsnl.alekberg.net/dns-query"

      "https://dns.adguard.com.dns-query"

      "https://dns.gooele.com.dns-query"

      "https://dns.circl.lu.com.dns-query"

   ])</e.list/>

}} $done(e)

#获取/dns dhl server see in this paper names: d-lists with names: e

var A =named

var D =dns-server

var E =dns-over-https

var U =url$

var A+U+D = data

var D+E = https

var<'A'>= iable

var-10000

start/A'D&&v/VARBLE&D'A = var&A_{/A'v&&E/VARBLE&E === {(var.E)}/&quot;

/}input/}&&local/match{/DNS\servip/quotes{

de'{/pass/by_select&best&oupt/very}do{jointly/}if End}  

&it't{var"type_body"}/see&datum-save/file}}

/if end'it/via(see)'you_i'be}file_data{employ}/of\over(way)/mount{/with-reload}/do(partie)/}

$done({var})

     }

}#!获取HTTP-request执行解析引用header报价

 {(

    generic: "proxy"

    route: "D/E/var>proxynode"

    response: "the"

    save: "response"

                     )}
  {
}
start =< LOCAL >

a&ns{analysis datas

Resolving｀datas

import = quot;servernode

<'header'>required `Host= Host: pull.free.video.10010.com

Host_was-give = "pull.free.video.10010.com"

server-sare$-->localhost-quotes

asked of\\Host: pull.free.video.10010.com {link~$data-transmit~<"$">import | WS-policy= $headers、Host.address

adopt NAT><Host.address the='Host: pull.free.video.10010.com'power

do{destination-networking}

returned: http_proxy{request_lines->quote("$")}

$done({Host})
}   
     {
        }:
getdata()= `headers'

analysis`headers' -> Parse host in headers address><replaced = ｀Host: pull.free.video.10010.com’
if }
it's {(
interposition: ws-headers="Host: pull.free.video.10010.com" {

DO}runimitation{headers->in{Host}data"$"{{

{input}proxynode{do data ^quotes ("$")

Result: h_name= ｀Host: pull.free.video.10010.com’

Result: h_addr_list= ｀127.0.0.1

returned: data_list= `node_quote'

export: ws-header = [H]/r/n
};)   {
   }
   $done({Host})
#   if'END
#var&&End'file =< restart

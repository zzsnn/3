const jobname = 'shuqi'
const $ = Env(jobname)


    !(async () =>
    {
        await all();
    })()
    .catch((e) =>
    {
        $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() =>
    {
        $.done();
    })

async function all()
{
    
    //签到 阅读 收取 视频 抽奖 分享   
    //nodejs运行
    
    //签到https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction
    await dailysign();
    await $.wait(1000);
    
    //视频https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery   
    await videoreward();
    await $.wait(1000);
    
    //抽奖视频https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery
    await videorewarddraw();
    await $.wait(1000);
    
    //抽奖https://ocean.shuqireader.com/api/activity/activity/v1/lottery/draw    
    await drawreward();
    await $.wait(1000);
    
    //阅读https://ocean.shuqireader.com/api/ad/v1/api/prize/readpage/pendant/lottery
    await read();
    await $.wait(1000);
    
    //分享https://ocean.shuqireader.com/api/activity/v1/task/reward
    await share();
    await $.wait(1000);
    
    //收取https://ocean.shuqireader.com/api/prizecenter/xapi/prize/manual/receive
    await receive();
    await $.wait(1000);
    
    //极速签到https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction
    await jsdailysign();
    await $.wait(1000);
    
    //极速签到视频https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery
    await jsvideoreward20();
    await $.wait(1000);
    
    //极速视频https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery
    await jsvideoreward10();
    await $.wait(1000);
    
    //极速书城https://ocean.shuqireader.com/api/activity/v1/task/reward
    await jsshucheng();
    await $.wait(1000);
    
    //极速分享https://ocean.shuqireader.com/api/activity/v1/task/reward
    await jsshare();
    await $.wait(1000);
    
    //极速阅读https://ocean.shuqireader.com/api/activity/v1/activity/pendant/lottery
    await jsread()
    await $.wait(1000);
    
    for(let i=0;i<10;i++)
    {
        await videoreward426();
        await $.wait(1000);
    }
    
    await $.wait(1000);
    await read426();

}


//426视频
function videoreward426()
{
    return new Promise((resolve, reject) =>
    {
        const url = "https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/";
        const headers = {
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Content-Type": "application/json",
            "Host": "api-access.pangolin-sdk-toutiao.com",
            "User-Agent": "Mozilla/5.0 (iPad; CPU OS 13_2_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
            "Content-Length": "4717",
            "Accept-Language": "zh-Hans-CN;q=1"
        };
        const body = "{\"message\":\"2T4KF51KH9JUhj9n77RqbdMShmTnQ\\/klmmXFKxWWdwy1N0zkcdGdu6FtG6psxnH6SJde11iQheCVVwR5Ix475m5BTUPdtnEpkPOWUwbubUrn3tacV2fwkoOmdZPSNjSsmjEEB+YAhw7kOisLnhrz4CJ8Y\\/sm3GU+Hc\\/10weUPCLwWoxdOXTHYIiFbSz9X1yeX0r61GdT9t6kN6gAFif4JqMaQFX1C01LRPFXhhGNp37Z56FRR4riLsJfx+xwq+lWdjOEzxNyK9bMExX1\\/8uqN0N1mo2tupPlp8zVxTEzdhGNTZpCzq5PSmbrExM18LXkSXqmA4idzRHHPS1Ok4Lbi4jSdQrmIUfPu\\/8O8YGCZ6k5c+hOJoLgRxijlCPuXfVZfPAW4S3d9YVTlewnnL99XTMHe6MOWgh32gf2RBKkk5u4VgHYCUfa2ZGAruAROaHP6L71c8KU7nZuWwxyBNfMRgzV4UOFTNh3ZKMlBja5F6tmrkyJIIJ9bzJVuzkDNZ+yScZQoIZswHpbucpUCdH+RC3IrKI6Qhbc\\/qmVUQpQ0mAiVheMpI4zyNzCbNtgIOpULuzHc3Bnt6PHU0bn2nuoHzfkpG\\/H9b24r3BIEtIEyVg6+2S42S+UqWDM9Q8QHZagKzoH9F6bLXBFEF4ig1yHFjPmASGZkjUUmMB86Re\\/Hb6u6cK3XsYZWTax2MtugujkuPdV8LuPS85wjEbNRvugpJ0TPym1feV5pG4Dr8aSY5N41aDIemZdKN9IxFw+KZ\\/2\\/IJofJaYVlTLtfn+55EWNaZNF+gmnU+IvNsdK\\/TxHx+FhyGgdltgTVBdPNM96pLz1E7iW3FBb3IqpFfYVAuGJ56le\\/PoQW6CBT8eKydMxxbCefUAZ7Rx4oab5zL3F7GTW4Z\\/fUxVDDa\\/elUoVNecYi4GHeAxApNlIPdP+2rGHZiRieyGA25SBIfpEufbZ+2mT\\/pC7BXS1IveeqgWLDKdRfnQWE1c3nBUQW1HoVFSNRY0zK299e9ZT1DfTdGiTMPYs3n1PQkG9t4fqDrp1OlHOd40T6steLhKS96qRVRr1a5OisyQc1GWBEnu4Sv1fsQ+UwcuMNX+2LHF08mnRiKv2md7ptzs1u6\\/sxbcGLeietBRf+5eGmMc9jlikg03yAmzBiLFqJLXhsu1Gw9FTXdEzuVzzFQHYFaGlRuU7iJ+7mugf5YDffQzSZp1HJVVUdRqUDTvYog7KtlctkPgsxV+EvxR9N08ZN9AJuRcl0kHjYpgVtQ920SYJDImHsEzt3Hg5gWzS7X1\\/oDXiXKdkY\\/YBDkO1Wp1nC0\\/aW8QnOhf1vm4PviY1bKPonTDnUKmgvUAruVyG1tpO87E2d\\/MwXVFm2yRet9UGE9zeLSI\\/rvtgrmp5oLrcCW6v8TeRkd8GQl7qM3LYyUH8HjajczBHBg1o5hBT9fjegGQf62dwKcFgYYBJhobIEtRZJe7GMeSaMyrIj+hGi9dnzy0ise1O9tnHg9BcoYP1Mc3x4+sJRb3M9PeUQmfjZu7NIERvlXIXll2C8wTOaFptK+nfuU9T9c+wBEx8L4Mbp9IU5Y6yaWZSHG1CPDgSN6rMMbv6cxg+KuL5zKmk03kP+lDOWi7IBvV8sIk0Yn0MzzD27xBHnjFFSUF6OorZclixAZs5hAaHnYofc2dWcNI3Cd1XJaaGcKlp1b9riMCpk3izL+zwA8MEewdPAjacm\\/8pOphO8Kd15rkqQyNxTI5Zd4lhA9iGTFRVQihpfN7cDntm7oeB11x3vobqoy9nfuzy+4YG0OHgWWwNUtqgVce6yVtEHGro3CFYLVCezqe4CRND8jfmZUFcrgwW\\/48YiDad6NnWHNDIfbTVVfCYvP0hZqvP6K9JBEooDHfXgFwfvCGUYrDXKOQyMq5OayK+nkTEvYA9NRC0bCqKoP8yCrKxnzzC6EZqlqOz8NFVeCZjOtzqrRCouYqmdOdAGRRUiOl0n8PGuBgKOuIbjG9R\\/5eVDNmzYgywCj8i3Fhb77HImGRpdgH+JLGPqOzcmwXjg1gd26ZqtqohxdP5LA7rAemcCU8uFpybdLfSWrtfN3blGIhSOns4zuBRbyHhZ93m6s9Irqr0mLr96LG3aQUEqG10aZRaDjiVr8eiKZDX1wgF4vblmexydkHss14qTvwvlz\\/Pm\\/0FnwYRKa6xuVF85hJGRxdg7FIMbomg1Rg22GZRneKk+vA8xJbIDOt0mbvzEtM0ErxbTdrwB03SF+SM0Tmp5yvGu6YNtuwudcGx2hCy8zKA+9ErCEFhC5UrM7Noyw3cpOGon6JicrvuZC4rmMNjHGbV6zrhygum49RxsQEHqM1tGF9VDv5HFR6PuLFg\\/L\\/Sx9DoO9N+f14n47W3NingT6QJnFy\\/Fsb\\/TgcM6BE8HzNHE2d636VvwHLxCNLnl\\/PJPGT8DMMsslfq0mfHzdszhJRQhyhOt57C6gAgjZZFwuT3v2mynE6UTtEVXuRwJNp5wvyPTtnRwHZYL0VYolCB2K+GO5BOH7+vVEx4jL\\/nMtDzBWSLehNSc6akEe004djfkUif626om5yWcmMlBzhY52q+9GPV8IWGMZjKVoof591KvsVmYZGar+XMYpqUAW\\/044SAtPls4N\\/iMJ1WuAzJGY0H4EKcpcF\\/ZMqQitbOrLcqfLhSYtHN24WntoqT6WGmlgYgv2UaV6pzxH+hngbxqHYuG5K2eNAssuMPnGEVkBt3Xrgh\\/ZJhQM0TTzNyw0ptmUdmFh1cXIgGBSKylnPijGdYniIw02hk7SqYWrqWHMxQSJt0cnMQFUwB1GvW3BfwgezAPxMLF4iwK2Wt4vy8Ay0qWVJzBAtNbltLAwrBjd8RAjRqisxrQvJbo7v8\\/apFwThABXj5B1nBuRH+BKdk7p2QTAZpLdQDIx9rRINBkB2ECo3LuOsKeF93TEtQYgfh+5kHzkdyeGyEkkwba6ExhAZVFSPhabADZh1ZLSgTLeIUPDZcTrhs+hE6sclCzGsVXqT1AZeX2vP2vpTAh7IB1RppIH32zqxKWxLtO10GOnvcmnAqmUGsBWIG47hG7jG8dwpA9i\\/E48eWh4Hwlkxp44UMqsi3QwUzBBggBE1CjWgDns0\\/17nPxYHxgK4F7\\/j3weRsbDEX0nftEx\\/EBnw4bHwFcEE8WR7eckb0ybtyeHwVuIcXP61pfGbSIiZa+fZZgzhpsFjnoo48qU6izBaoW0kvm1ecT8nmmKH\\/ADm34iJLduDQ+uIHUfxo6N5NjHyB6M8Dw+q1efUEVA7T0Fmqy8TTspY4AlZOHQedOOyBJ8ifIGgXIBAxbIR79q+sBu2PMBZLFgSIoK3w7bxIxah195TG5aAggZWVcXJlS\\/g4oBl+tQvZRPVYXn+BZN8wT2K5GOge5TEuA1dTLpLTnjIkWIt5l7H\\/5rUy0SkBMNTVSLR\\/dMR4CVDjrLXfIj\\/95IFgTkXwUWtxnr10TWI6eIOlFBjFMZJdHuk4+M8ACHHmKGjB7T+nfueGjUjWAaCOXJYGSWqU5fSLCd20GgnGDW1U8iP1yKHE1jc\\/CJvsLo4LpKptpZPyM5coLx+u8unBB087C5m1E5ULNpErrXb14nWqQGWd7nleKigc\\/uLdyeuKTuDDunRQQSTD1JQvmJgfLtYeULCAqE6XdczJMAhR1if5XzxRDr3FLTgvTNAYK7Uc+F4CExRU7A9Wq+wetpHCZPe+Q+CzLvGa12dBgB3WiaPFfkq4iUneTm6GoVisAU8zW3eHtgC6dj\\/WFGvy\\/B8VyRyVWXZGhDVC0TnnVIERXL+XmYwr9GAhn8U4iWfJvq+jyJZeS\\/zMjDUZepjYVvVkf1JLOZO45yWkepbhI0XA2yfo9ULasMjk32frw1T5wMEfhqJbjWpB7mXfkW9VFgXITB1djUrrm499kuBnFaZh9lQ4jToMd3L6EdGyQECRUvXYQ8QNeUOpHmHQI3NK725AZ8+YIDlaTUgrignaphrqQ7YRpqNTabVlEPygM3ljhS3JXAqn4Y9wG5EFdTiB8nvdoa3SUGVIW68MhKo9WgVr\\/IlafxxMGwBCr4Ov38EVB7MPPH25\\/MFi3v4pnS8NLDKX0+Ob\\/XJuK\\/VY3mqSfVvSOCHDm527qC2SOS4fGBf1J+vSJCvJ26V3v+up1OaA\\/erWOEK8A6PFFmbpZwudx\\/8qwiMI2bOrSYNDzWSjmtQaMnD0VlRmlnIPiNc39bKpv\\/x8\\/R68ldA8vaRpUhy4j93twMyjhvtf1DlU2rKsgllLQASioLPGvbFpIy0u0YHMS1dC1G2Do5OOQspnXLyHuebLLHKs2jwOQrOyioFs5Ke1GqFY0swargrFXqRZN8Vu+pFlUBsRlo8tFqlTmHGdmasHjb79RknjrtKHdcLoxHIkmjODMAxW\\/ZwKGIBkX3au9BFgDGhWbl9\\/SLQOe7fjig+wyrCUG\\/atsPFCfQvrISj8EaUCTqKG0CwacDlMr3\\/BYh\\/XljHR2MBkLeHbtXpLA\\/6ggKX4VIEkhCt38bjUYiNWQczT9KqUDV8s2JcvOZeSvLGiKlVu\\/GBQ4KTHcCjEAfYWy\\/JTX2VcsZJQErfI3pM0l30fEuyqwrWEKVK4jcuRhgJDqkPrLl4cOz4YXWiqdUdCHnj7fkbOYkRw\",\"cypher\":2}";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) =>
        {
            try
            {
                $.log(data);
            }
            catch (e)
            {
                $.log(e)
            }
            resolve();
        })
    })
}


//426阅读
function read426()
{
    return new Promise((resolve, reject) =>
    {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/readpage/pendant/lottery";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BJWVwCP9WMjvbHw07CngquuyrpVPkkmkfsWvxRc6UIxbbrdg3-LsdoA8PvRY9WFc; cna=wVmjGXEJsiUCAXAfvZEK/5zJ",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqireader/4.2.6 (iPad; iOS 13.2.2; Scale/2.00)",
            "Accept-Language": "zh-Hans-CN;q=1"
        };
        const body = "_public=skinId%3D999%26idfa%3D021BC905-6AFA-424D-8B50-99F11074780F%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwwan%26umidtoken%3DYRxruFbmacIDADjqvrFJgz0i%26user_id%3D2916901745%26sn%3D2C6C8B4E89B5253B7A6EFE559CF0C08C1229D01C%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DBA06F6AB9661003A1DA723B28A1AF20643BB3296%26skinVersionPrefix%3D1%26appVer%3D4.2.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiQkEwNkY2QUI5NjYxMDAzQTFEQTcyM0IyOEExQUYyMDY0M0JCMzI5NiIsInNuIjoiMkM2QzhCNEU4OUI1MjUzQjdBNkVGRTU1OUNGMEMwOEMxMjI5RDAxQyIsImV4cCI6MTYyOTc3MTE1NiwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTI1Mjc1Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.PPT_1Wimc2dL141NpVNCweAfe-uJOvy18_UxEwg7VAF-amgti--izqVsPN0QJFuvT5YCojiB8Pn8lvupwboHSQ%26skinColor%3D23B383%26platform%3DiOS%26ver%3D201102%26mod%3DiPad4G%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D750x1334%26soft_id%3D21%26utdid%3DYRxruFbmacIDADjqvrFJgz0i%26utype%3Dvip%26sdk%3D13.2.2&deliveryId=531&key=sq_app_ad&miniWua=HHnB_xPXK19arARvcrQepQw5tGVMuA1Q9DUHiWCJm9nGcwpspzMwcskQhXo2LQ7esM7LHlgp9UFCSNJIaB/azua2UywuDTc9nzfZGax3GHldNa//kamdwqXBX0bf4bK4u6k6c&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=0FA00ADC614941171F259622F0234BDB&timestamp=1629252811&userId=2916901745&wua=HIVW_gka845tP4apVJpT8T3jvuTCLAlAdR6ZSX2hU/OKCP9NKuytiA6UpqB/DtGEhj5QuiADEypSd4LPac8cp8V7G/F%2BJsiO3yWaNRrkVDywhs1E3oEwWwzwBhdem93cpQj4Tzeh4lDq75qyHoVNw7dKHnAWzRKIjnCAs30ojR0TgFdm89VgM0xjNtFHvdF5yqcEwJkhnYi7D3xNjL5kJ/mF4I8SBoiTEhb0hYK1lh56K1D7b1N0sEXOkozMvbfVfo9X3oRIPhcPo3DKKHsSmNr4iPsk9y4zVLa2yFoswD4Re9t%2Bneo77L%2BBW%2Bxaw1tnmLzm3jec4z%2BIlNrXyAFg0Bh1wuA7xHu0AbTVnrut88Zb28gO2puegDsurUx4y4KlYIcxw";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) =>
        {
            try
            {
                $.log(data);
                const result = JSON.parse(data)
                if (result.status == 200)
                {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt)
                    {
                        await read426();
                        await $.wait(500);
                    }
                }


            }
            catch (e)
            {
                $.log(e)
            }
            resolve();
        })
    })
}


//收取
function receive()
{
    return new Promise((resolve, reject) =>
    {
const url = `https://ocean.shuqireader.com/api/prizecenter/xapi/prize/manual/receive`;
const method = `POST`;
const headers = {
'Origin' : `https://render-web.shuqireader.com`,
'Accept-Encoding' : `gzip, deflate, br`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Accept' : `application/json, text/plain, */*`,
'Host' : `ocean.shuqireader.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.1.0) WindVane/8.6.1 Shuqi (iPhone10,1__shuqi__v4.3.1.0) 750x1334 Winding(WV_2) WK`,
'Referer' : `https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=14.3&utdid=YG%2B52Xxg5lYDAGLrDZD2l9sq&ustatus=1&first_placeid=111111&net_env=4g&placeid=111111&user_id=2032723913&sn=DF018E7E75A621F69E57BDE9F510AAB8DA839FCF&umidtoken=ENJLvUNLOjOt6zV7X4vb6EeAdlSPNn4M&msv=8.0.0&brand=Apple&imei=0A3F122D956A2BDCA11CCBBFCAEDABDBDFFAB0F9&skinVersionPrefix=1&appVer=4.3.1.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyNzIzOTEzIiwidXRkaWQiOiIiLCJpbWVpIjoiMEEzRjEyMkQ5NTZBMkJEQ0ExMUNDQkJGQ0FFREFCREJERkZBQjBGOSIsInNuIjoiREYwMThFN0U3NUE2MjFGNjlFNTdCREU5RjUxMEFBQjhEQTgzOUZDRiIsImV4cCI6MTYzMDAzOTg1OSwidXNlcklkIjoiMjAzMjcyMzkxMyIsImlhdCI6MTYyOTUyMTQ1OSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.3is3UtEllG_9Bv9r4x15t-nkpOzXoAuRpiG4HEM0tUBh8iCxk_yNuiaq8O9h5MVTHnrfNqnpxZ4JmqcrBH__zQ&skinColor=23B383&platform=iOS&ver=210111&mod=iPhone8&statusBarHeight=20.000000&skinVersion=1&wh=750x1334&soft_id=21&utype=vip&skinId=999&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98`,
'Accept-Language' : `zh-cn`
};
const body = `src=204&userId=2032723913&platform=1&appVer=4.3.1.0&placeId=111111&timestamp=1629522748&sqSv=1.0&sign=1998ce31b9f7b93f08d32be7ee8070a0&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D14.3%26utdid%3DYG%252B52Xxg5lYDAGLrDZD2l9sq%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2032723913%26sn%3DDF018E7E75A621F69E57BDE9F510AAB8DA839FCF%26umidtoken%3DENJLvUNLOjOt6zV7X4vb6EeAdlSPNn4M%26msv%3D8.0.0%26brand%3DApple%26imei%3D0A3F122D956A2BDCA11CCBBFCAEDABDBDFFAB0F9%26skinVersionPrefix%3D1%26appVer%3D4.3.1.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyNzIzOTEzIiwidXRkaWQiOiIiLCJpbWVpIjoiMEEzRjEyMkQ5NTZBMkJEQ0ExMUNDQkJGQ0FFREFCREJERkZBQjBGOSIsInNuIjoiREYwMThFN0U3NUE2MjFGNjlFNTdCREU5RjUxMEFBQjhEQTgzOUZDRiIsImV4cCI6MTYzMDAzOTg1OSwidXNlcklkIjoiMjAzMjcyMzkxMyIsImlhdCI6MTYyOTUyMTQ1OSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.3is3UtEllG_9Bv9r4x15t-nkpOzXoAuRpiG4HEM0tUBh8iCxk_yNuiaq8O9h5MVTHnrfNqnpxZ4JmqcrBH__zQ%26skinColor%3D23B383%26platform%3D1%26ver%3D210111%26mod%3DiPhone8%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D750x1334%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3DB69897E1-9858-46B8-9463-4A461DB9CF98`;
      const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) =>
        {
            try
            {
                $.log(data);
            }
            catch (e)
            {
                $.log(e)
            }
            resolve();
        })
    })
}


//分享
function share()
{
    return new Promise((resolve, reject) =>
    {
const url = `https://ocean.shuqireader.com/api/activity/v1/task/reward`;
const method = `POST`;
const headers = {
'Origin' : `https://render-web.shuqireader.com`,
'Accept-Encoding' : `gzip, deflate, br`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Accept' : `application/json, text/plain, */*`,
'Host' : `ocean.shuqireader.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.1.0) WindVane/8.6.1 Shuqi (iPhone10,1__shuqi__v4.3.1.0) 750x1334 Winding(WV_2) WK`,
'Referer' : `https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=14.3&utdid=YG%2B52Xxg5lYDAGLrDZD2l9sq&ustatus=1&first_placeid=111111&net_env=4g&placeid=111111&user_id=2032723913&sn=DF018E7E75A621F69E57BDE9F510AAB8DA839FCF&umidtoken=ENJLvUNLOjOt6zV7X4vb6EeAdlSPNn4M&msv=8.0.0&brand=Apple&imei=0A3F122D956A2BDCA11CCBBFCAEDABDBDFFAB0F9&skinVersionPrefix=1&appVer=4.3.1.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyNzIzOTEzIiwidXRkaWQiOiIiLCJpbWVpIjoiMEEzRjEyMkQ5NTZBMkJEQ0ExMUNDQkJGQ0FFREFCREJERkZBQjBGOSIsInNuIjoiREYwMThFN0U3NUE2MjFGNjlFNTdCREU5RjUxMEFBQjhEQTgzOUZDRiIsImV4cCI6MTYzMDAzOTg1OSwidXNlcklkIjoiMjAzMjcyMzkxMyIsImlhdCI6MTYyOTUyMTQ1OSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.3is3UtEllG_9Bv9r4x15t-nkpOzXoAuRpiG4HEM0tUBh8iCxk_yNuiaq8O9h5MVTHnrfNqnpxZ4JmqcrBH__zQ&skinColor=23B383&platform=iOS&ver=210111&mod=iPhone8&statusBarHeight=20.000000&skinVersion=1&wh=750x1334&soft_id=21&utype=vip&skinId=999&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98`,
'Accept-Language' : `zh-cn`
};
const body = `actTaskId=304&wua=HIVW_78R0eAvUeknqmznezQ6lpdxc97nnrDerll6kKVuGBbZWJi35mozifB8qFDEEL7Tg9JJ4fXiz62IY6UMM6lSFXBHivfKJjsnt66jJDm9mqtefNt0vcjDGSTR7iX5lYm68Q3f71jEwQAC70%2BYRShdOhnRgYvlUmZwYLyouVBGABzcH41ZvIWF8PqUO6VeqhzaYKdtg2wkX0Mcjbw22lJQ%2FiPsesHkEyk0XEqPzZFdby28CQskEMYnHbQF68HrdhmIdnLBjpHXTEf8MWnlByURVDTvmvEdFzq%2BfVN1gfwkg%2BrQdlMBCllczxxdpTCmfYFK%2FMoBWexDeeorwwx2S621jluAl3iCZGUTfa5zB7BCa2BBkSypEJyqWh9NIKBrL2hC3c3aQMQEdbHtgT5Kk6s%2FuXw%3D%3D&ua=&miniWua=HHnB_JaP6O8Dts2Bhzxojzdksq7rgVt1hZiC7iKciUNdTZ6xuzn%2FsZVnKdiSGFKINr4u6PCK0aNE1APf6qwd7RbBrbIz1cCkzyjJVIjoGrZsFIrQdUdgfb0VilqY5QLKKlhlGY%2FsYaJxfVYx4XPdL4THpAQ%3D%3D&userId=2032723913&umidtoken=ENJLvUNLOjOt6zV7X4vb6EeAdlSPNn4M&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.3.1.0&placeId=111111&timestamp=1629521625&sqSv=1.0&sign=389f1bc90aa1875d41976ebed493e647&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D14.3%26utdid%3DYG%252B52Xxg5lYDAGLrDZD2l9sq%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2032723913%26sn%3DDF018E7E75A621F69E57BDE9F510AAB8DA839FCF%26umidtoken%3DENJLvUNLOjOt6zV7X4vb6EeAdlSPNn4M%26msv%3D8.0.0%26brand%3DApple%26imei%3D0A3F122D956A2BDCA11CCBBFCAEDABDBDFFAB0F9%26skinVersionPrefix%3D1%26appVer%3D4.3.1.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyNzIzOTEzIiwidXRkaWQiOiIiLCJpbWVpIjoiMEEzRjEyMkQ5NTZBMkJEQ0ExMUNDQkJGQ0FFREFCREJERkZBQjBGOSIsInNuIjoiREYwMThFN0U3NUE2MjFGNjlFNTdCREU5RjUxMEFBQjhEQTgzOUZDRiIsImV4cCI6MTYzMDAzOTg1OSwidXNlcklkIjoiMjAzMjcyMzkxMyIsImlhdCI6MTYyOTUyMTQ1OSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.3is3UtEllG_9Bv9r4x15t-nkpOzXoAuRpiG4HEM0tUBh8iCxk_yNuiaq8O9h5MVTHnrfNqnpxZ4JmqcrBH__zQ%26skinColor%3D23B383%26platform%3D1%26ver%3D210111%26mod%3DiPhone8%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D750x1334%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3DB69897E1-9858-46B8-9463-4A461DB9CF98`;

      const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) =>
        {
            try
            {
                $.log(data);
            }
            catch (e)
            {
                $.log(e)
            }
            resolve();
        })
    })
}


//极速阅读
function jsread()
{
    return new Promise((resolve, reject) =>
    {
        const url = "https://ocean.shuqireader.com/api/activity/v1/activity/pendant/lottery?sdk=14.6&ustatus=1&umidtoken=wGRLAd1LOjxByTV7SSyOvpA4qSfDtolT&net_env=wifi&placeid=111111&user_id=2916901745&sn=E92DD36C442DA62AA22EF6B3333F044F331EA5AC&msv=10.0.0&brand=Apple&imei=F4272D0D67994A9AD162B30B05698204BD8445A3&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhoneXS&wh=1125x2436&utype=vip&utdid=YAzuwNlmZUMDAP8Knq70D7M9&idfa=00000000-0000-0000-0000-000000000000";
        const headers = {
            "Cookie": "isg=BLy8y1cg8VYBisUd1W4whMJzh15utWDf1ibuiJY9WafvYRzrvsWNbVLBRw8ZMpg3; cna=BXqeGVTd73sCAatTLPUxYOJB",
            "Accept": "*/*",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept-Encoding": "gzip, deflate, br",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 14.6; Scale/3.00)",
            "Content-Length": "603",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "actId=355&miniWua=HHnB_c/ctO11SSNODDkG3RkNbzMkUI8EWCg/PA5SjzH7YwOUBhR9NOI3WOKepUeKY0UGAtKwawndI2MzObr1L3XdWOjNF4k155i8%2BWcrsTNbqHkk2sy3bYyrPU7hMMDK/zgMd&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&timestamp=1629066304&userId=2916901745&wua=ktgi_aLfYfZH9LUibJBQjBTegTnJOd903oB6hZUaJ4lDIQTGmCCNaidE7Q0abSs8D8/SI%2BT/LHAdRQ8Nn6hCo6VExvP4aQk1kDqIzMdFbDOE22TOz6zs9w2cjgkzQ/wKQYdBscVMMkuP7zWnx5ZpyqzZAlr5gTRHxaKKKU5IRNMPzatgeT/erhUaZkwt%2BwOBr9ng4MQJ2SWybvKd3M9Dw0riw3coH0UR6BVLPMf0UgW1cxM9kYzRb7ddDyleCp%2BRoXmczfn1DvsRSJaRFwnAAu8NcgK9iXFaEFsw6f3LUG7nZGVGr67Pe0uDsLt1c%2BiaER7JV";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) =>
        {
            try
            {
                $.log(data);
                const result = JSON.parse(data)
                if (result.status == 200)
                {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt)
                    {
                        await jsread();
                        await $.wait(500);
                    }
                }
            }
            catch (e)
            {
                $.log(e)
            }
            resolve();
        })
    })
}


//阅读
function read()
{
    return new Promise((resolve, reject) =>
    {
const url = `https://ocean.shuqireader.com/api/ad/v1/api/prize/readpage/pendant/lottery`;
const method = `POST`;
const headers = {
'Cookie' : `isg=BCMjC2-yRiptagtR_GzvHD3buGPNGLdaAAuvO1WATQLLlE-23eguqByOiuKaLw9S; cna=ac6VGQcf8n4CAXtw1wxQ3E17`,
'Accept' : `*/*`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Accept-Encoding' : `gzip, deflate, br`,
'Host' : `ocean.shuqireader.com`,
'User-Agent' : `shuqireader/4.3.1 (iPhone; iOS 14.3; Scale/2.00)`,
'Accept-Language' : `zh-Hans-CN;q=1, en-CN;q=0.9`
};
const body = `_public=skinId%3D999%26idfa%3DB69897E1-9858-46B8-9463-4A461DB9CF98%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DENJLvUNLOjOt6zV7X4vb6EeAdlSPNn4M%26user_id%3D2032723913%26sn%3DDF018E7E75A621F69E57BDE9F510AAB8DA839FCF%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D0A3F122D956A2BDCA11CCBBFCAEDABDBDFFAB0F9%26skinVersionPrefix%3D1%26appVer%3D4.3.1.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyNzIzOTEzIiwidXRkaWQiOiIiLCJpbWVpIjoiMEEzRjEyMkQ5NTZBMkJEQ0ExMUNDQkJGQ0FFREFCREJERkZBQjBGOSIsInNuIjoiREYwMThFN0U3NUE2MjFGNjlFNTdCREU5RjUxMEFBQjhEQTgzOUZDRiIsImV4cCI6MTYzMDA0MDAyNywidXNlcklkIjoiMjAzMjcyMzkxMyIsImlhdCI6MTYyOTUyMTYyNywib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.i5EA3SIQBEgHK0VQ5hz03ekq9ugO7aAdskizR_IYNjwQV3T_9rGOkMgNwCZiNjMmuHviXjg3mpRMKBDA9vPRGA%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210111%26mod%3DiPhone8%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D750x1334%26soft_id%3D21%26utdid%3DYG%2B52Xxg5lYDAGLrDZD2l9sq%26utype%3Dvip%26sdk%3D14.3&deliveryId=707&key=sq_app_ad&miniWua=HHnB_KnZgc8ktPcCW4btMwdfqK8Nu42YQlwQtIneK3%2BR2JZg01faEgxmuvhzYF5lKL6CKuCYaPzI8FePectXHgYm%2BLIwDdI7QNm3y0cGk0fXzD7pVGE0a4tY1o92UKJA2BzrMBS23ZCd93cTCEcOi8m6v9Q%3D%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=73C571F2B6333CE69EDB24514DA993A7&timestamp=1629523199&userId=2032723913&wua=HIVW_OIHJ7Sm86p52x8PRfWXeyerRFn%2B4mYhQxsW365jasDfu10I%2BGcytNusbMeBC3wrHdU0C054aVVXOyK75X85qD2k8UQhcQhRjKAyJqqP2butWVxVXGxuY9cjKdeVoyJOMGFminsvjxS0S8k0U%2B7nOszbcSzffntaIRxVxuZSUl9kmQPLoVS6SPZNaNiOkI59G2v2luzkq44zurUMxOrVYunN/Hnt7N26YdbugqhQZvQytpjA5p9h9LxoLm8Hrxsgg87fzZHsMrFQCR9gH1jB%2Bdvpxfs8UWJLzUGdXvC2LuNFNzK782TkGsspkokSpBXxaoSsNysKAGEOHmeCnWzS67BlOTsuE/MoGdMz4Q0xCXxpS8sIWtSy/xAySGVcbjZf1Qy6OXn5A0VKU/qlnLWfOsA%3D%3D`;
      const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) =>
        {
            try
            {
                $.log(data);
                const result = JSON.parse(data)
                if (result.status == 200)
                {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt)
                    {
                        await read();
                        await $.wait(500);
                    }
                }
            }
            catch (e)
            {
                $.log(e)
            }
            resolve();
        })
    })
}


//阅读时长
function timeupload()
{
    return new Promise((resolve, reject) =>
    {
        const url = "https://jcollection.shuqireader.com/collection/iosapi/reading/upload";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BBgYkueLzeNc6OFnwPftXvbB40KqAXyLn_CVz1IJV9MG7Y7X-hHiGkGHIaNdZjRj; cna=DrCfGa6NT3ACAatTLPVy9s0J",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "jcollection.shuqireader.com",
            "User-Agent": "shuqireader/4.3.0 (iPhone; iOS 14.6; Scale/3.00)",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "_public=skinId%253D999%2526idfa%253D00000000-0000-0000-0000-000000000000%2526ustatus%253D1%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DbCxLedRLOls1JDV7SC1arg%252BRtgLyo21t%2526user_id%253D2916901745%2526sn%253D9FFC2945934B0127160C769D23FE8D9606CB0FAE%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%2526skinVersionPrefix%253D1%2526appVer%253D4.3.0.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526session%253DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTUzNDc2MiwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTAxNjM2Miwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.pQFbLw8WrDYjlNnOeO7kfBHqW7-LZyZjZ-Mwk03SWaYrfQ2QspcF26DKI4wsmDChqyHv3SJ_GxVlhObZu1Yvsw%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210107%2526mod%253DiPhoneXS%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1125x2436%2526soft_id%253D21%2526utdid%253DXblVsgqHUiwDAN7BcQnm2A%252Fp%2526utype%253Dvip%2526sdk%253D14.6&key=and_log&readingList=%5B%7B%22startTime%22%3A1629016791%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%227370011%22%2C%22readChapterId%22%3A938736%2C%22readingLen%22%3A6%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=67E3DB2C6F946BEF9D018989F4B3AEFC&timestamp=1629016797&user_id=2916901745";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) =>
        {
            try
            {
                $.log(data);
            }
            catch (e)
            {
                $.log(e)
            }
            resolve();
        })
    })
}


//极速分享
function jsshare()
{
    return new Promise((resolve, reject) =>
    {
        const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward";
        const headers = {
            "Origin": "https://render-web.shuqireader.com",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json, text/plain, */*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.5.0) WindVane/8.6.1 Shuqi-Lite (iPhone11,2__shuqi__v1.0.5.0) 1125x2436 Winding(WV_2) WK",
            "Referer": "https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.6&ustatus=1&umidtoken=CJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA&net_env=wifi&placeid=111111&user_id=2916901745&sn=E92DD36C442DA62AA22EF6B3333F044F331EA5AC&msv=10.0.0&brand=Apple&imei=F4272D0D67994A9AD162B30B05698204BD8445A3&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhoneXS&wh=1125x2436&utype=vip&utdid=YAzuwNlmZUMDAP8Knq70D7M9&idfa=00000000-0000-0000-0000-000000000000",
            "Content-Length": "1802",
            "Accept-Language": "zh-cn"
        };
        const body = "actTaskId=327&wua=ktgi_3Tz5Q%2FQuk9FImWbBSzUm%2FN%2Bk4wjoUc%2B%2Bg1Aj6lUFVL4lg3uSd%2FFuCjVsuYudoADGIvP9utkK8wQV%2BSY%2FQypkIEXr8KOinM0h8%2BeI2NF8dXcFW0t5WNRr1YiNpqryTfNciZIeB4IJ3KjlIMxZo7eKxxIbJcAkJ3k6bIiLp0cknSAZrNfPzAOkdHsAojTkuy2LdZKlH2A%2FDactl2%2FpOAJ%2BGNKuJ9rpztz9vudqBp%2FRntPQGQtY3D8iXwr8hf2wAQLUPDq6JiL61j1hOpkWTNlVMnxPvdUN%2Fe342gejaSHVv5zf8cb9Nwn5kyeWB24%2FCSL1b%2Bc8sX%2FUJMphr1cVo%2BQkqA%3D%3D&ua=&miniWua=HHnB_7DYrUuJn7%2BnkozmoMtJTDJ9slmM%2BjM1PYHVyaLHA7ICaKM0PxVvZBwHm7AMjlluCye8qqlxYykLPLjpzWyFR3%2BvBeJc3%2BcAY%2BMqUnpglCzESxBZZ0QEXM0ikiHUP3cuv&userId=2916901745&umidtoken=CJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1629016036&sqSv=1.0&sign=5c6651e003dcf4d7104c01a870581bce&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.6%26ustatus%3D1%26umidtoken%3DCJFLLxhLOp%252Bu3zV7QyKs806Y%252BvW9YrOA%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2916901745%26sn%3DE92DD36C442DA62AA22EF6B3333F044F331EA5AC%26msv%3D10.0.0%26brand%3DApple%26imei%3DF4272D0D67994A9AD162B30B05698204BD8445A3%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhoneXS%26wh%3D1125x2436%26utype%3Dvip%26utdid%3DYAzuwNlmZUMDAP8Knq70D7M9%26idfa%3D00000000-0000-0000-0000-000000000000";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) =>
        {
            try
            {
                $.log(data);
            }
            catch (e)
            {
                $.log(e)
            }
            resolve();
        })
    })
}


//极速书城
function jsshucheng()
{
    return new Promise((resolve, reject) =>
    {
        const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward?sdk=14.6&ustatus=1&umidtoken=CJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA&net_env=wifi&placeid=111111&user_id=2916901745&sn=E92DD36C442DA62AA22EF6B3333F044F331EA5AC&msv=10.0.0&brand=Apple&imei=F4272D0D67994A9AD162B30B05698204BD8445A3&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhoneXS&wh=1125x2436&utype=vip&utdid=YAzuwNlmZUMDAP8Knq70D7M9&idfa=00000000-0000-0000-0000-000000000000";
        const headers = {
            "Cookie": "isg=BOHh2SrJJKggsYjKICUFi094-qn7jlWAS31jv0O28ennqgp8i999UQGgCFgsee24; cna=BXqeGVTd73sCAatTLPUxYOJB",
            "Accept": "*/*",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept-Encoding": "gzip, deflate, br",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 14.6; Scale/3.00)",
            "Content-Length": "100",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "actTaskId=344&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&userId=2916901745";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) =>
        {
            try
            {
                $.log(data);
            }
            catch (e)
            {
                $.log(e)
            }
            resolve();
        })
    })
}


//极速视频
function jsvideoreward10()
{
    return new Promise((resolve, reject) =>
    {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BMHBbsFARAgBa6gqAIVl62-Y2gnb7jXga-9oWCMW0EiKCsXcaz76sNhA6PhMGc0Y; cna=BXqeGVTd73sCAatTLPUxYOJB",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 14.6; Scale/3.00)",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "_public=idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26net_env%3Dwifi%26umidtoken%3DCJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA%26placeid%3D111111%26user_id%3D2916901745%26sn%3DE92DD36C442DA62AA22EF6B3333F044F331EA5AC%26msv%3D10.0.0%26brand%3DApple%26imei%3DF4272D0D67994A9AD162B30B05698204BD8445A3%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhoneXS%26wh%3D1125x2436%26utype%3Dvip%26utdid%3DYAzuwNlmZUMDAP8Knq70D7M9%26sdk%3D14.6&deliveryId=897&key=sq_app_ad&miniWua=HHnB_3SMWpVcrf%2BGigHsqHAbaMwFZjmFYm/nSWDLJ5MCjNLvVFtYMwQJEaFFm5sFGqFQ0hCqOXKk1d1MBbmEzQRNjNAGg/HPQe%2B6SZQCZa%2BgRylsfQ7NHm//jwtWr%2BOe89EbQ&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=719&sign=A1C6AC2353277A8E0CD35370A39ADDC8&timestamp=1629015720&userId=2916901745&user_id=2916901745&wua=ktgi_KWcfFAwrcl4kSYsk%2BqAf/XvZ/3UoOoaWSR4pkDOU%2BdxQ06K5q11k4BjdoLwZrrwIoEXsz66a/JsDq8xM%2Bgr2YNlBWtoiubDDvcF2Y//B0d9uYQ7ATL88qSRS46doPR8iY7rBdy6084VMi5wrcgNAocBn%2BAJCaKjZASokU4TZf5WgBWpdN/0ln4keyqPUnrOPOUDPWqxXO2lBuVr0BkGEBrGhBBWDrFw945P93o62quEBP/nvJLLX8/6g9kQHOIQLh1FWqxgUGfXYgQrQ/3en%2B9mDDgySVVXu48iTcTAg93zZ03Nz3/KdAP1/nUcR6b4O";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) =>
        {
            try
            {
                $.log(data);
                const result = JSON.parse(data)
                if (result.status == 200)
                {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt)
                    {
                        await jsvideoreward10();
                        await $.wait(500);
                    }
                }
            }
            catch (e)
            {
                $.log(e)
            }
            resolve();
        })
    })
}


//极速签到视频
function jsvideoreward20()
{
    return new Promise((resolve, reject) =>
    {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BGVlQ4WMaHwfsIy2RLnZ3-MMfiWfohk0V9tMJGdKLxyNfojwL_LUBu9cDGQI5THs; cna=BXqeGVTd73sCAatTLPUxYOJB",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 14.6; Scale/3.00)",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "_public=idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26net_env%3Dwifi%26umidtoken%3DCJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA%26placeid%3D111111%26user_id%3D2916901745%26sn%3DE92DD36C442DA62AA22EF6B3333F044F331EA5AC%26msv%3D10.0.0%26brand%3DApple%26imei%3DF4272D0D67994A9AD162B30B05698204BD8445A3%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhoneXS%26wh%3D1125x2436%26utype%3Dvip%26utdid%3DYAzuwNlmZUMDAP8Knq70D7M9%26sdk%3D14.6&deliveryId=980&key=sq_app_ad&miniWua=HHnB_%2BNXh03V1/aLva2aESnRsb3Vid9f3uBac5KaDmUx%2BeF4aO8r%2BPK%2BdtIDQRNlAiX9%2BBzgBl4kySlkbugT19uUSqowDQD76xTiKbyQKaO4obKaLgr18733BJewaxPOMO905&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=717&sign=CE4FF05F51CF37FE111372001FDFCA39&timestamp=1629015259&userId=2916901745&user_id=2916901745&wua=ktgi_T5TSslcG8S40FfQ7ghBeeMC00V1KvqIp3gVIa4J/GYX9idgk6SrlViY7Odxg/clKzJwVYES6U77CB3B1Ml5OX%2Bei%2Bd0Af1k4zhg64iDJt5Jt0j8pCFz3AY94ki%2B%2BHnmSyR4a2Kd/RfCQXKhf7FSmTiB5vAHhPrb3aSL7vRoiX3EpPgU96iMXDIx0V9NW1PtH0YPwoRFOiYR4BQPEBq6qsOFbJ7TRkFti4RCqJs9uQr4y8MRtC%2BG85cCrnouExTP6mcVVftnplrkTTJYQwIS5CnV4uZilnd949q8be2eXJ1MzsyYBCpKbb7PW3il1df6j";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) =>
        {
            try
            {
                $.log(data);
                const result = JSON.parse(data)
                if (result.status == 200)
                {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt)
                    {
                        await jsvideoreward20();
                        await $.wait(100);
                    }
                }
            }
            catch (e)
            {
                $.log(e)
            }
            resolve();
        })
    })
}


//极速签到
function jsdailysign()
{
    return new Promise((resolve, reject) =>
    {
        const url = "https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction";
        const headers = {
            "Origin": "https://render-web.shuqireader.com",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json, text/plain, */*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.5.0) WindVane/8.6.1 Shuqi-Lite (iPhone11,2__shuqi__v1.0.5.0) 1125x2436 Winding(WV_2) WK",
            "Referer": "https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.6&ustatus=1&umidtoken=CJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA&net_env=wifi&placeid=111111&user_id=2916901745&sn=E92DD36C442DA62AA22EF6B3333F044F331EA5AC&msv=10.0.0&brand=Apple&imei=F4272D0D67994A9AD162B30B05698204BD8445A3&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhoneXS&wh=1125x2436&utype=vip&utdid=YAzuwNlmZUMDAP8Knq70D7M9&idfa=00000000-0000-0000-0000-000000000000",
            "Accept-Language": "zh-cn"
        };
        const body = "clientTimestamp=1629015222&position=601&signInType=1&wua=ktgi_8VRO4TruIk1p8M2lu4SpGEzaHDS8yDsvLX9ElOXbMfnd1LjNgtGaPI9uVGeguslQPCNovWQkeiNgYg045ifWzfTHH2HwwhOb0hB07utbFqcSDMCzPCnYkR2%2BKfo%2FvaTJEFwsY1u0piLOQPACgubCVhTE4tZhr2w5PB7PWngoJMmoveydRzSmypRS%2BsTvsR0eHR%2F8hNUKFo%2FB304Uui%2Fl%2FqJVEbdF5nDyK2BwgjoLR5d7edxLKMtgNunW9TbJ%2BGLV9iHCjiM6pv5brTvZuFJu%2B46iDUpPEDt5cqlctf1U3reO4Km%2FMcUX8GVq2rua0lWG&ua=&miniWua=HHnB_JDcbWxm1YICXHWnp2SwR5LW6W%2BQYNxFuxH3SNK5LQbvFKM7QJvQAXETokQrv30zErou7AkieajiRMjjBA5pdxkMJ0MU1GDHFr0PjpKRa7scWxaK%2BM3XD%2FCXy2muXzZkp&userId=2916901745&umidtoken=CJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1629015222&sqSv=1.0&sign=2533cb79da6874c1555fac73e7072980&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.6%26ustatus%3D1%26umidtoken%3DCJFLLxhLOp%252Bu3zV7QyKs806Y%252BvW9YrOA%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2916901745%26sn%3DE92DD36C442DA62AA22EF6B3333F044F331EA5AC%26msv%3D10.0.0%26brand%3DApple%26imei%3DF4272D0D67994A9AD162B30B05698204BD8445A3%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhoneXS%26wh%3D1125x2436%26utype%3Dvip%26utdid%3DYAzuwNlmZUMDAP8Knq70D7M9%26idfa%3D00000000-0000-0000-0000-000000000000";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) =>
        {
            try
            {
                $.log(data);
            }
            catch (e)
            {
                $.log(e)
            }
            resolve();
        })
    })
}


//签到
function dailysign()
{
    return new Promise((resolve, reject) =>
    {
        const url = "https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction";
        const headers = {
            "Origin": "https://render-web.shuqireader.com",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json, text/plain, */*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.4.8.0) WindVane/8.6.1 Shuqi (iPhone11,2__shuqi__v4.4.8.0) 1125x2436 Winding(WV_2) WK",
            "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20363&sdk=14.6&utdid=XblVsgqHUiwDAN7BcQnm2A%2Fp&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2916901745&sn=9FFC2945934B0127160C769D23FE8D9606CB0FAE&umidtoken=sexLoWNLOqLnEjV7RCUGcO68DNG%2Bz6if&msv=8.0.0&brand=Apple&skinVersionPrefix=1&isTeenMode=0&appVer=4.4.8.0&personalized=1&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTQ1MjcxOCwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyODkzNDMxOCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.lSxANoPMo0CWwlOz2SCLz0Eu6oMfFuOdrBo9BR9BrK-bF2Zyrcqc4cXpChPWtPbVBSYz0bxau-x4ZxOCMhO-7g&skinColor=23B383&platform=iOS&sqiOSUniqDeviceId=6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5&mod=iPhoneXS&ver=210802&skinVersion=1&skinActiveColor=0F9970&statusBarHeight=44.000000&wh=1125x2436&soft_id=21&utype=vip&skinId=999&idfa=00000000-0000-0000-0000-000000000000",
            "Content-Length": "2001",
            "Accept-Language": "zh-cn"
        };
        const body = "clientTimestamp=1629010657&position=501&signInType=1&wua=HIVW_SHrM3h2JkyoYAgn3ql4jRIy6b5g0AnUJP7I1U6aGiqQwA7oQSEgNZ%2BN8ALcrbeN4XfImFmU1WLw8hUDUw9LnTfLTpFLXlvQ7pL60uQzr1OUk%2FVboon34vSD%2BAMypmhGyIcxJajORk537gVeUjDdXi5pLnj7mjsDnE0Jgi%2BqvbFilG0C4vBwfZfzT6yZd5aCjTbUJt2VTLriJX2IHHpUU5i2RwkWrPKZoGWbO4OQT6YRO5jYlBnBqfkxhutQ5oqgiEBD3rUuIiDWIoSIfupc9V4yo4VSWtNoWZak20EZ0K7Q%3D&ua=&miniWua=HHnB_JuqDlmNVLuGpc0My162gs8NWXyFaoSc%2Ffuhz57T9z99RDkHNb3iTg0Mut4vnmWNqLe4O693LbAnypX9tSUb2rujnJ%2FHEvKQwHjqiROdCX8xtNN4%2Fawu6U5lPFEqVB2OhG%2FQzrnvjELSdHQ7p6VpG1Sd%2FjW68m3We4H0W1YLzWXI%3D&userId=2916901745&umidtoken=sexLoWNLOqLnEjV7RCUGcO68DNG%2Bz6if&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.4.8.0&placeId=111111&timestamp=1629010657&sqSv=1.0&sign=3105bea087cff4a2b140b79cf27dfa64&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D14.6%26utdid%3DXblVsgqHUiwDAN7BcQnm2A%252Fp%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2916901745%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26umidtoken%3DsexLoWNLOqLnEjV7RCUGcO68DNG%252Bz6if%26msv%3D8.0.0%26brand%3DApple%26skinVersionPrefix%3D1%26isTeenMode%3D0%26appVer%3D4.4.8.0%26personalized%3D1%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTQ1MjcxOCwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyODkzNDMxOCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.lSxANoPMo0CWwlOz2SCLz0Eu6oMfFuOdrBo9BR9BrK-bF2Zyrcqc4cXpChPWtPbVBSYz0bxau-x4ZxOCMhO-7g%26skinColor%3D23B383%26platform%3D1%26sqiOSUniqDeviceId%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26mod%3DiPhoneXS%26ver%3D210802%26skinVersion%3D1%26skinActiveColor%3D0F9970%26statusBarHeight%3D44.000000%26wh%3D1125x2436%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) =>
        {
            try
            {
                $.log(data);
            }
            catch (e)
            {
                $.log(e)
            }
            resolve();
        })
    })
}


//视频
function videoreward()
{
    return new Promise((resolve, reject) =>
    {
const url = `https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery`;
const method = `POST`;
const headers = {
'Cookie' : `isg=BBkZPn4JnKjq8EFzEqKFXvvtIgHzpg1YoP9tOTvOhMC_QjrUg_ZaKpgYQIA0YaWQ; cna=ac6VGQcf8n4CAXtw1wxQ3E17`,
'Accept' : `*/*`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Accept-Encoding' : `gzip, deflate, br`,
'Host' : `ocean.shuqireader.com`,
'User-Agent' : `shuqireader/4.3.6 (iPhone; iOS 14.3; Scale/2.00)`,
'Accept-Language' : `zh-Hans-CN;q=1, en-CN;q=0.9`
};
const body = `_public=skinId%3D999%26idfa%3DB69897E1-9858-46B8-9463-4A461DB9CF98%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYG%2B52Xxg5lYDAGLrDZD2l9sq%26user_id%3D2032723913%26sn%3DDF018E7E75A621F69E57BDE9F510AAB8DA839FCF%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D0A3F122D956A2BDCA11CCBBFCAEDABDBDFFAB0F9%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyNzIzOTEzIiwidXRkaWQiOiIiLCJpbWVpIjoiMEEzRjEyMkQ5NTZBMkJEQ0ExMUNDQkJGQ0FFREFCREJERkZBQjBGOSIsInNuIjoiREYwMThFN0U3NUE2MjFGNjlFNTdCREU5RjUxMEFBQjhEQTgzOUZDRiIsImV4cCI6MTYzMDA0MTc3OCwidXNlcklkIjoiMjAzMjcyMzkxMyIsImlhdCI6MTYyOTUyMzM3OCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.P3qcpYZ1scdkmGO3HrWMt_M7LPOHovO2mF_vqD2BJ-a5QLtw4ydbhSi_X68dZifyplL6jnVs2jhM9iqfYWKH4w%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D750x1334%26soft_id%3D21%26utdid%3DYG%2B52Xxg5lYDAGLrDZD2l9sq%26utype%3Dvip%26sdk%3D14.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_gJwp4yps5dUWoYm6w72c19IN3h01wSrDnA299Ei0oqw%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=598BD4A8F77971ECE5B7F5B1840939DE&timestamp=1629523436&userId=2032723913&user_id=2032723913&wua=HIVW_Wwz810jeRg9hOWouSPBwv4pRnkBCoGWUWbQq8wif1UiiP/mqzEV09lLAP%2BJcJ%2BpQVbrjYmrizll9xJsoGXLJ6eMbtd4JBUcdgujDKL5EloBzc0HCj%2B91zKqGzPFWSdU%2BojSyr2bI4tJejnTHym2FKXuleREltm58An1SAKkHPbkk6tEr5%2BeZp28bmqehNQ%2B9rGhKDMJKBDO8TcF3XyWeTgv8hD0MJZ8ZWoTWN7h5Of0%3D`;
      const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) =>
        {
            try
            {
                $.log(data);
                const result = JSON.parse(data)
                if (result.status == 200)
                {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt)
                    {
                        await videoreward();
                        await $.wait(500);
                    }
                }
            }
            catch (e)
            {
                $.log(e)
            }
            resolve();
        })
    })
}


//抽奖视频
function videorewarddraw()
{
    return new Promise((resolve, reject) =>
    {
const url = `https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery`;
const method = `POST`;
const headers = {
'Cookie' : `isg=BFRUApK0ySfkxVwkJ_kQYcbWL5bGrXiX7VCHDO414V9i2fYjFrxXJt0b3VfBOrDv; cna=ac6VGQcf8n4CAXtw1wxQ3E17`,
'Accept' : `*/*`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Accept-Encoding' : `gzip, deflate, br`,
'Host' : `ocean.shuqireader.com`,
'User-Agent' : `shuqireader/4.3.6 (iPhone; iOS 14.3; Scale/2.00)`,
'Accept-Language' : `zh-Hans-CN;q=1, en-CN;q=0.9`
};
const body = `_public=skinId%3D999%26idfa%3DB69897E1-9858-46B8-9463-4A461DB9CF98%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYG%2B52Xxg5lYDAGLrDZD2l9sq%26user_id%3D2032723913%26sn%3DDF018E7E75A621F69E57BDE9F510AAB8DA839FCF%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D0A3F122D956A2BDCA11CCBBFCAEDABDBDFFAB0F9%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyNzIzOTEzIiwidXRkaWQiOiIiLCJpbWVpIjoiMEEzRjEyMkQ5NTZBMkJEQ0ExMUNDQkJGQ0FFREFCREJERkZBQjBGOSIsInNuIjoiREYwMThFN0U3NUE2MjFGNjlFNTdCREU5RjUxMEFBQjhEQTgzOUZDRiIsImV4cCI6MTYzMDA0MTc3OCwidXNlcklkIjoiMjAzMjcyMzkxMyIsImlhdCI6MTYyOTUyMzM3OCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.P3qcpYZ1scdkmGO3HrWMt_M7LPOHovO2mF_vqD2BJ-a5QLtw4ydbhSi_X68dZifyplL6jnVs2jhM9iqfYWKH4w%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D750x1334%26soft_id%3D21%26utdid%3DYG%2B52Xxg5lYDAGLrDZD2l9sq%26utype%3Dvip%26sdk%3D14.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_tZaZxgMlpVkmEpP/y/GJGIPILr/ijOIdscw8iF0LkzA%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=7E10C72CD04C7A0F15CDD0E5B45DB7DB&timestamp=1629523489&userId=2032723913&user_id=2032723913&wua=HIVW_RvgaZRZJBnA/Z8y2bfqInUMkwhNNW%2BJaqIxBn8/%2BPc%2BnP%2B2LHmD3uHRcDN8mPrBbKSfcm1mp1eEjjMp6y56xo7%2BS3G9TXvhXr3YPLqDkEyKSx9roPY2lK9jnhNJMZIKoORh/1CH9tUfebAKRZ7vzhkAFEk0SPEVU%2B9%2BLGlgJx1HbOhq2wjzkQzyWerPKfodWScO6FNfrtQvVSBgz4Bmm2w%3D%3D`;
      const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) =>
        {
            try
            {
                $.log(data);
                const result = JSON.parse(data)
                if (result.status == 200)
                {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt)
                    {
                        await videorewarddraw();
                        await $.wait(500);
                    }
                }
            }
            catch (e)
            {
                $.log(e)
            }
            resolve();
        })
    })
}


//抽奖
function drawreward()
{
    return new Promise((resolve, reject) =>
    {

const url = `https://ocean.shuqireader.com/api/activity/activity/v1/lottery/draw?asac=2A20C07RJ9F51AOEFSNHDR`;
const method = `POST`;
const headers = {
'Origin' : `https://render-web.shuqireader.com`,
'Accept-Encoding' : `gzip, deflate, br`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Accept' : `application/json, text/plain, */*`,
'Host' : `ocean.shuqireader.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.6.0) WindVane/8.6.1 Shuqi (iPhone10,1__shuqi__v4.3.6.0) 750x1334 Winding(WV_4) WK`,
'Referer' : `https://render-web.shuqireader.com/render/wx-activity/page/lottery_page_red_package_rain/?serviceWorkerOn=1&asac=2A20C07RJ9F51AOEFSNHDR&spm=a2oun.page_render_sq_welfare_welfare_page_v2.%E6%8B%9B%E8%B4%A2%E7%8C%AB.turntable_in_0&sdk=14.3&utdid=YG%2B52Xxg5lYDAGLrDZD2l9sq&ustatus=1&first_placeid=111111&net_env=4g&placeid=111111&user_id=2032723913&sn=DF018E7E75A621F69E57BDE9F510AAB8DA839FCF&umidtoken=YG%2B52Xxg5lYDAGLrDZD2l9sq&msv=8.0.0&brand=Apple&imei=0A3F122D956A2BDCA11CCBBFCAEDABDBDFFAB0F9&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyNzIzOTEzIiwidXRkaWQiOiIiLCJpbWVpIjoiMEEzRjEyMkQ5NTZBMkJEQ0ExMUNDQkJGQ0FFREFCREJERkZBQjBGOSIsInNuIjoiREYwMThFN0U3NUE2MjFGNjlFNTdCREU5RjUxMEFBQjhEQTgzOUZDRiIsImV4cCI6MTYzMDA0MTc3OCwidXNlcklkIjoiMjAzMjcyMzkxMyIsImlhdCI6MTYyOTUyMzM3OCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.P3qcpYZ1scdkmGO3HrWMt_M7LPOHovO2mF_vqD2BJ-a5QLtw4ydbhSi_X68dZifyplL6jnVs2jhM9iqfYWKH4w&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone8&statusBarHeight=20.000000&skinVersion=1&wh=750x1334&soft_id=21&utype=vip&skinId=999&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98`,
'Accept-Language' : `zh-cn`
};
const body = `wua=HIVW_y1rishkWgdOuXwcyHS9GFGqse6Swia0%2BhqAXGb7%2BODv8PvZp2ybeW46tL9N9QD361hsVMF7K%2BCovAiGshLVJtTmoksORb5KljmDktpzx1jtOeac5KMUkLnfK%2BuFMacFAl0f0dWT20jarGsCb8vilmBA9rTTVEk7c4GfxMbseVvTjCdnHDvjxm%2FOVtAHbpZSM%2BdZANjMaY4amwlKvSj7bcXddokxJpSQ3DVf%2BE8V7RKc%3D&ua=&userId=2032723913&umidtoken=YG%252B52Xxg5lYDAGLrDZD2l9sq&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1629523495&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=1b5b9bc255dfe49121ef8b957db9c83b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%2525E6%25258B%25259B%2525E8%2525B4%2525A2%2525E7%25258C%2525AB.turntable_in_0%26sdk%3D14.3%26utdid%3DYG%252B52Xxg5lYDAGLrDZD2l9sq%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2032723913%26sn%3DDF018E7E75A621F69E57BDE9F510AAB8DA839FCF%26umidtoken%3DYG%25252B52Xxg5lYDAGLrDZD2l9sq%26msv%3D8.0.0%26brand%3DApple%26imei%3D0A3F122D956A2BDCA11CCBBFCAEDABDBDFFAB0F9%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyNzIzOTEzIiwidXRkaWQiOiIiLCJpbWVpIjoiMEEzRjEyMkQ5NTZBMkJEQ0ExMUNDQkJGQ0FFREFCREJERkZBQjBGOSIsInNuIjoiREYwMThFN0U3NUE2MjFGNjlFNTdCREU5RjUxMEFBQjhEQTgzOUZDRiIsImV4cCI6MTYzMDA0MTc3OCwidXNlcklkIjoiMjAzMjcyMzkxMyIsImlhdCI6MTYyOTUyMzM3OCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.P3qcpYZ1scdkmGO3HrWMt_M7LPOHovO2mF_vqD2BJ-a5QLtw4ydbhSi_X68dZifyplL6jnVs2jhM9iqfYWKH4w%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D750x1334%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3DB69897E1-9858-46B8-9463-4A461DB9CF98`;
      const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) =>
        {
            try
            {
                $.log(data);
                const result = JSON.parse(data)
                if (result.status == 200)
                {

                    if (result.data.availableNum > 0)
                    {
                        await drawreward();
                        await $.wait(100);
                    }
                }
            }
            catch (e)
            {
                $.log(e)
            }
            resolve();
        })
    })
}







function Env(t, e)
{
    class s
    {
        constructor(t)
        {
            this.env = t
        }
        send(t, e = "GET")
        {
            t = "string" == typeof t ?
                {
                    url: t
                } :
                t;
            let s = this.get;
            return "POST" === e && (s = this.post),
                new Promise((e, i) =>
                {
                    s.call(this, t, (t, s, r) =>
                    {
                        t ? i(t) : e(s)
                    })
                })
        }
        get(t)
        {
            return this.send.call(this.env, t)
        }
        post(t)
        {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class
        {
            constructor(t, e)
            {
                this.name = t,
                    this.http = new s(this),
                    this.data = null,
                    this.dataFile = "box.dat",
                    this.logs = [],
                    this.isMute = !1,
                    this.isNeedRewrite = !1,
                    this.logSeparator = "\n",
                    this.startTime = (new Date)
                    .getTime(),
                    Object.assign(this, e),
                    this.log(`\n${this.name}\u811a\u672c,\u5f00\u59cb\u6267\u884c:`)
            }
            isNode()
            {
                return "undefined" != typeof module && !!module.exports
            }
            isQuanX()
            {
                return "undefined" != typeof $task
            }
            isSurge()
            {
                return "undefined" != typeof $httpClient && "undefined" == typeof $loon
            }
            isLoon()
            {
                return "undefined" != typeof $loon
            }
            toObj(t, e = null)
            {
                try
                {
                    return JSON.parse(t)
                }
                catch
                {
                    return e
                }
            }
            toStr(t, e = null)
            {
                try
                {
                    return JSON.stringify(t)
                }
                catch
                {
                    return e
                }
            }
            getjson(t, e)
            {
                let s = e;
                const i = this.getdata(t);
                if (i)
                    try
                    {
                        s = JSON.parse(this.getdata(t))
                    }
                catch
                {}
                return s
            }
            setjson(t, e)
            {
                try
                {
                    return this.setdata(JSON.stringify(t), e)
                }
                catch
                {
                    return !1
                }
            }
            getScript(t)
            {
                return new Promise(e =>
                {
                    this.get(
                    {
                        url: t
                    }, (t, s, i) => e(i))
                })
            }
            runScript(t, e)
            {
                return new Promise(s =>
                    {
                        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                        i = i ? i.replace(/\n/g, "")
                            .trim() : i;
                        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                        r = r ? 1 * r : 20,
                            r = e && e.timeout ? e.timeout : r;
                        const [o, h] = i.split("@"),
                            a = {
                                url: `http://${h}/v1/scripting/evaluate`,
                                body:
                                {
                                    script_text: t,
                                    mock_type: "cron",
                                    timeout: r
                                },
                                headers:
                                {
                                    "X-Key": o,
                                    Accept: "*/*"
                                }
                            };
                        this.post(a, (t, e, i) => s(i))
                    })
                    .catch(t => this.logErr(t))
            }
            loaddata()
            {
                if (!this.isNode())
                    return {};
                {
                    this.fs = this.fs ? this.fs : require("fs"),
                        this.path = this.path ? this.path : require("path");
                    const t = this.path.resolve(this.dataFile),
                        e = this.path.resolve(process.cwd(), this.dataFile),
                        s = this.fs.existsSync(t),
                        i = !s && this.fs.existsSync(e);
                    if (!s && !i)
                        return {};
                    {
                        const i = s ? t : e;
                        try
                        {
                            return JSON.parse(this.fs.readFileSync(i))
                        }
                        catch (t)
                        {
                            return {}
                        }
                    }
                }
            }
            writedata()
            {
                if (this.isNode())
                {
                    this.fs = this.fs ? this.fs : require("fs"),
                        this.path = this.path ? this.path : require("path");
                    const t = this.path.resolve(this.dataFile),
                        e = this.path.resolve(process.cwd(), this.dataFile),
                        s = this.fs.existsSync(t),
                        i = !s && this.fs.existsSync(e),
                        r = JSON.stringify(this.data);
                    s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
                }
            }
            lodash_get(t, e, s)
            {
                const i = e.replace(/\[(\d+)\]/g, ".$1")
                    .split(".");
                let r = t;
                for (const t of i)
                    if (r = Object(r)[t], void 0 === r)
                        return s;
                return r
            }
            lodash_set(t, e, s)
            {
                return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString()
                        .match(/[^.[\]]+/g) || []), e.slice(0, -1)
                    .reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] :
                    {}, t)[e[e.length - 1]] = s, t)
            }
            getdata(t)
            {
                let e = this.getval(t);
                if (/^@/.test(t))
                {
                    const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                        r = s ? this.getval(s) : "";
                    if (r)
                        try
                        {
                            const t = JSON.parse(r);
                            e = t ? this.lodash_get(t, i, "") : e
                        }
                    catch (t)
                    {
                        e = ""
                    }
                }
                return e
            }
            setdata(t, e)
            {
                let s = !1;
                if (/^@/.test(e))
                {
                    const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                        o = this.getval(i),
                        h = i ? "null" === o ? null : o || "{}" : "{}";
                    try
                    {
                        const e = JSON.parse(h);
                        this.lodash_set(e, r, t),
                            s = this.setval(JSON.stringify(e), i)
                    }
                    catch (e)
                    {
                        const o = {};
                        this.lodash_set(o, r, t),
                            s = this.setval(JSON.stringify(o), i)
                    }
                }
                else
                    s = this.setval(t, e);
                return s
            }
            getval(t)
            {
                return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
            }
            setval(t, e)
            {
                return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
            }
            initGotEnv(t)
            {
                this.got = this.got ? this.got : require("got"),
                    this.cktough = this.cktough ? this.cktough : require("tough-cookie"),
                    this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar,
                    t && (t.headers = t.headers ? t.headers :
                    {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
            }
            get(t, e = (() =>
            {}))
            {
                t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
                    this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers ||
                    {}, Object.assign(t.headers,
                    {
                        "X-Surge-Skip-Scripting": !1
                    })), $httpClient.get(t, (t, s, i) =>
                    {
                        !t && s && (s.body = i, s.statusCode = s.status),
                            e(t, s, i)
                    })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts ||
                        {}, Object.assign(t.opts,
                        {
                            hints: !1
                        })), $task.fetch(t)
                        .then(t =>
                        {
                            const
                            {
                                statusCode: s,
                                statusCode: i,
                                headers: r,
                                body: o
                            } = t;
                            e(null,
                            {
                                status: s,
                                statusCode: i,
                                headers: r,
                                body: o
                            }, o)
                        }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t)
                        .on("redirect", (t, e) =>
                        {
                            try
                            {
                                if (t.headers["set-cookie"])
                                {
                                    const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse)
                                        .toString();
                                    this.ckjar.setCookieSync(s, null),
                                        e.cookieJar = this.ckjar
                                }
                            }
                            catch (t)
                            {
                                this.logErr(t)
                            }
                        })
                        .then(t =>
                        {
                            const
                            {
                                statusCode: s,
                                statusCode: i,
                                headers: r,
                                body: o
                            } = t;
                            e(null,
                            {
                                status: s,
                                statusCode: i,
                                headers: r,
                                body: o
                            }, o)
                        }, t =>
                        {
                            const
                            {
                                message: s,
                                response: i
                            } = t;
                            e(s, i, i && i.body)
                        }))
            }
            post(t, e = (() =>
            {}))
            {
                if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon())
                    this.isSurge() && this.isNeedRewrite && (t.headers = t.headers ||
                    {}, Object.assign(t.headers,
                    {
                        "X-Surge-Skip-Scripting": !1
                    })), $httpClient.post(t, (t, s, i) =>
                    {
                        !t && s && (s.body = i, s.statusCode = s.status),
                            e(t, s, i)
                    });
                else if (this.isQuanX())
                    t.method = "POST", this.isNeedRewrite && (t.opts = t.opts ||
                    {}, Object.assign(t.opts,
                    {
                        hints: !1
                    })), $task.fetch(t)
                    .then(t =>
                    {
                        const
                        {
                            statusCode: s,
                            statusCode: i,
                            headers: r,
                            body: o
                        } = t;
                        e(null,
                        {
                            status: s,
                            statusCode: i,
                            headers: r,
                            body: o
                        }, o)
                    }, t => e(t));
                else if (this.isNode())
                {
                    this.initGotEnv(t);
                    const
                    {
                        url: s,
                        ...i
                    } = t;
                    this.got.post(s, i)
                        .then(t =>
                        {
                            const
                            {
                                statusCode: s,
                                statusCode: i,
                                headers: r,
                                body: o
                            } = t;
                            e(null,
                            {
                                status: s,
                                statusCode: i,
                                headers: r,
                                body: o
                            }, o)
                        }, t =>
                        {
                            const
                            {
                                message: s,
                                response: i
                            } = t;
                            e(s, i, i && i.body)
                        })
                }
            }
            time(t)
            {
                let e = {
                    "M+": (new Date)
                        .getMonth() + 1,
                    "d+": (new Date)
                        .getDate(),
                    "H+": (new Date)
                        .getHours(),
                    "m+": (new Date)
                        .getMinutes(),
                    "s+": (new Date)
                        .getSeconds(),
                    "q+": Math.floor(((new Date)
                        .getMonth() + 3) / 3),
                    S: (new Date)
                        .getMilliseconds()
                };
                /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date)
                        .getFullYear() + "")
                    .substr(4 - RegExp.$1.length)));
                for (let s in e)
                    new RegExp("(" + s + ")")
                    .test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s])
                        .substr(("" + e[s])
                            .length)));
                return t
            }
            msg(e = t, s = "", i = "", r)
            {
                const o = t =>
                {
                    if (!t)
                        return t;
                    if ("string" == typeof t)
                        return this.isLoon() ? t : this.isQuanX() ?
                            {
                                "open-url": t
                            } :
                            this.isSurge() ?
                            {
                                url: t
                            } :
                            void 0;
                    if ("object" == typeof t)
                    {
                        if (this.isLoon())
                        {
                            let e = t.openUrl || t.url || t["open-url"],
                                s = t.mediaUrl || t["media-url"];
                            return {
                                openUrl: e,
                                mediaUrl: s
                            }
                        }
                        if (this.isQuanX())
                        {
                            let e = t["open-url"] || t.url || t.openUrl,
                                s = t["media-url"] || t.mediaUrl;
                            return {
                                "open-url": e,
                                "media-url": s
                            }
                        }
                        if (this.isSurge())
                        {
                            let e = t.url || t.openUrl || t["open-url"];
                            return {
                                url: e
                            }
                        }
                    }
                };
                this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
                let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
                h.push(e),
                    s && h.push(s),
                    i && h.push(i),
                    console.log(h.join("\n")),
                    this.logs = this.logs.concat(h)
            }
            log(...t)
            {
                t.length > 0 && (this.logs = [...this.logs, ...t]),
                    console.log(t.join(this.logSeparator))
            }
            logErr(t, e)
            {
                const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
                s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
            }
            wait(t)
            {
                return new Promise(e => setTimeout(e, t))
            }
            done(t = {})
            {
                const e = (new Date)
                    .getTime(),
                    s = (e - this.startTime) / 1e3;
                this.log("", `${this.name}\u811a\u672c, \u6267\u884c\u7ed3\u675f! \u7528\u65f6${s}\u79d2`),
                    this.log(),
                    (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
            }
        }
        (t, e)
}


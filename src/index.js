module.exports = function check(str, bracketsConfig) {
    let isFound = false;
    let arr = [];
    let config = bracketsConfig;
    for(let i = 0; i<String(str).length; i++)
    {
        isFound = false;
        for(let j = 0; j<config.length; j++)
        {
            if(isFound==false)
            {
                for(let k = 0; k<2; k++)
                {
                    if(str[i] == config[j][k])
                    {
                        isFound = true;
                        if(config[j][0]==config[j][1])
                        {
                            if(arr.length!=0 && arr[arr.length-1]==str[i])
                            {
                                arr.pop();
                                break;
                            }
                            else if((arr.length!=0 && arr[arr.length-1]!=str[i]) || arr.length==0)
                            {
                                arr.push(str[i]);
                                break;
                            }
                        }                    
                        else if(k == 0)
                        {
                            arr.push(str[i]);
                            break;
                        }
                        else if(k == 1)
                        {
                            if(arr.length!=0 && arr[arr.length-1]==config[j][0])
                            {
                                arr.pop();
                                break;
                            }
                            else if(arr.length==0)
                            {
                                return false;
                            }
                        }
                    }
                }
            }
            else
            {
                break;
            }
        }   
    }
    if(arr.length!=0)
    {
        return false;
    }
    else(arr.length==0)
    {
        return true;
    }
}

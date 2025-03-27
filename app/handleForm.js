
'use server'; 

export default async function handleForm(prev, formData){
    if(formData.get('username') == 'minhduc' && formData.get('password') == '12345'){
        return true;
    } 
    return false; 
}
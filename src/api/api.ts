const API_URL='https://crm-dev.mie-services.com/';
export const authApi={
    login: async (email:string, password:string) => {
        try {
            const response = await fetch(`${API_URL}auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error logging in:', error);
            throw error;
        }
    }
};
export const LeadDetailsApi={
    getLeadDetails:async(LeadId:string)=>{
        try {
            const response = await fetch(`${API_URL}contact/lead/${LeadId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching lead details:', error);
            throw error;
        }
    }
};
export const PartnerListApi={
    getPartnerList:async(page:number,page_size:number,company_id:string,)=>{
        try {
            const response = await fetch(`${API_URL}auth/partner/list`, {
                method: 'GET',
                headers:{
                'content-type':'application/json',
                'body':{
                        'page':page,
                        'page_size':page_size,
                        'company_id':company_id,
                },
                }
            }
            catch(error){
                console.error('Error fetching partner list:', error);
                throw error;
            }

            
}
export const profileApi={
    getProfile:async()=>{
        try{

            const response=await fetch(`${API_URL}auth/user/profile`,{
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                },
            });
            const data=await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching profile:', error);
            throw error;
        }
    }
}
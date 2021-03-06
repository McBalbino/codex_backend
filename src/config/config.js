const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch (env) {
        case 'dev':
            return {
                bd_url: 'mongodb+srv://usuario_admin:BvFBrpVNG36oyEgY@clusterapi.zryx0.mongodb.net/db_dev?retryWrites=true&w=majority',
                jwt_secret: 'olamundo2021',
                jwt_expires_in: '1d'
            }
        case 'prod':
            return {
                bd_url: URL_DO_BD_PROD,
                jwt_secret: JWT_SECRET,
                jwt_expires_in: TEMPO_PARA_EXPIRAR
            }
    }
}

console.log(`API em ambiente ${env.toUpperCase()}`);
module.exports = config();

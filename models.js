'use strict';

module.exports = function(app , mongoose)
{
   require('./schema/unit')(app , mongoose);
   require('./schema/expense')(app , mongoose);
   require('./schema/payments')(app , mongoose);  
   require('./schema/tenants')(app , mongoose);
   require('./schema/users')(app , mongoose);
   require('./schema/charges')(app , mongoose);
   require('./schema/maintain')(app , mongoose);
   require('./schema/refund')(app , mongoose);
}

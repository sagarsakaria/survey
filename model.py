# explanation of how your source code models the data in accordance with Odoo best practices
from odoo import models, fields, api

class MyModel(models.Model):
    _name = 'my.model'
    _description = 'My model for survey'

    field1 = fields.Char(string='Field 1')
    field2 = fields.Char(string='Field 2')
    computed_field = fields.Char(string='Computed Field', compute='_compute_computed_field', store=True)

    @api.depends('field1', 'field2')
    def _compute_computed_field(self):
        # compute field for merge value of field1 and field2
        # Added by: sagarsakaria
        # Added on: 20/12/2023 
        for record in self:
            record.computed_field = self._calculate_computed_field()

    
    def _calculate_computed_field(self):
        # Common logic for computing the value of computed_field
        # Added by: sagarsakaria
        # Added on: 20/12/2023
        return field1 + field2

    

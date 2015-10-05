function fnFormatDetails ( oTable, nTr )
{
	
	//please keep this row on the top of function this the array value of bale column records 
	
	 var aData = oTable.fnGetData( nTr );
//varible for sending means users uniqe email id 
var email_id=aData[2];

  
  
  
  
  
  
  alert('you have to call ajax script first and then retrive a data of application and Items here For that please check the dynamic_table_inots.js file first finction..  and users uniqe email id is '+email_id);
  
  // whene you undeestand please remove alert link 
  //fetch data from ajax and bound with var 
  var Apps='<div class="row"><div class="col-lg-2"><input type="checkbox"  checked=checked>Check Box One</div><div class="col-lg-2"><input type="checkbox"  checked=checked>Check Box Two</div><div class="col-lg-2"><input type="checkbox">Check Box Three </div><div class="col-lg-2"><input type="checkbox">Check Box Four</div><div class="col-lg-2"><input type="checkbox">Check Box Four</div><div class="col-lg-2"><input type="checkbox">Check Box One</div><div class="col-lg-2"><input type="checkbox">Check Box Two</div><div class="col-lg-2"><input type="checkbox">Check Box Three </div><div class="col-lg-2"><input type="checkbox">Check Box Four</div><div class="col-lg-2"><input type="checkbox">Check Box Four</div></div>';
  
   var Groups='<div class="row"><div class="col-lg-2"><input type="checkbox">Check Box One</div><div class="col-lg-2"><input type="checkbox">Check Box Two</div><div class="col-lg-2"><input type="checkbox"  checked=checked>Check Box Three </div><div class="col-lg-2"><input type="checkbox"  checked=checked>Check Box Four</div><div class="col-lg-2"><input type="checkbox"  checked=checked>Check Box Four</div><div class="col-lg-2"><input type="checkbox">Check Box One</div><div class="col-lg-2"><input type="checkbox">Check Box Two</div><div class="col-lg-2"><input type="checkbox">Check Box Three </div><div class="col-lg-2"><input type="checkbox">Check Box Four</div><div class="col-lg-2"><input type="checkbox">Check Box Four</div></div>';
		
   
    var sOut = '<form action="" method=""><table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px; width:100%;">';
	sOut += '<tr>';
	sOut += '<td> <div class="task-header red_task" style="padding:0px !important;">User Details  of : '+aData[1]+'  </div></td>';
	sOut += '<td align="right"><a href="javascript:void(0);" class="add_user" data-toggle="modal" data-target="#myModal1"><button class="btn btn-primary" type="button"> Edit User Details  </button> </a> &emsp; <a href="javascript:void(0);" class="add_user" data-toggle="modal" data-target="#myModal2"><button class="btn btn-warning" type="button">Change User Name  </button></a> &emsp; <a href="javascript:void(0);" class="add_user" data-toggle="modal" data-target="#myModal3"> <button class="btn btn-success" type="button">Change Password </button></a></td>';
	sOut += '</tr>';
	sOut += '<td colspan="2"><b> App </b>';
	sOut += application;
	sOut += '</td></tr>';
	sOut += '<tr><td colspan="2"> <b>Item</b>';
	sOut += Item;
	sOut += '</td></tr>';
	sOut += '</tr></table></form>';
	
    return sOut;
}

$(document).ready(function() {

    $('#dynamic-table').dataTable( {
        "aaSorting": [[ 4, "desc" ]]
    } );
    /*
     * Insert a 'details' column to the table
     */
    var nCloneTh = document.createElement( 'th' );
    var nCloneTd = document.createElement( 'td' );
    nCloneTd.innerHTML = '<img src="plugins/advanced-datatable/images/details_open.png">';
    nCloneTd.className = "center";

    $('#hidden-table-info thead tr').each( function () {
        this.insertBefore( nCloneTh, this.childNodes[0] );
    } );

    $('#hidden-table-info tbody tr').each( function () {
        this.insertBefore(  nCloneTd.cloneNode( true ), this.childNodes[0] );
    } );

    /*
     * Initialse DataTables, with no sorting on the 'details' column
     */
    var oTable = $('#hidden-table-info').dataTable( {
        "aoColumnDefs": [
            { "bSortable": false, "aTargets": [ 0 ] }
        ],
        "aaSorting": [[1, 'asc']]
    });

    /* Add event listener for opening and closing details
     * Note that the indicator for showing which row is open is not controlled by DataTables,
     * rather it is done here
     */
    $('#hidden-table-info tbody td img').click(function () {
        var nTr = $(this).parents('tr')[0];
        if ( oTable.fnIsOpen(nTr) )
        {
            /* This row is already open - close it */
            this.src = "plugins/advanced-datatable/images/details_open.png";
            oTable.fnClose( nTr );
        }
        else
        {
            /* Open this row */
            this.src = "plugins/advanced-datatable/images/details_close.png";
            oTable.fnOpen( nTr, fnFormatDetails(oTable, nTr), 'details' );
        }
    } );
} );
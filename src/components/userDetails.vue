<template>
    <div class="container">
  <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">User Profile</h3>
      </div>
 <!-- Panel-Body -->   
      <div class="panel-body">
        <div class="row">
          <div class="col-xs-12 col-md-3 col-lg-3" align="center">
            <img src="https://s-media-cache-ak0.pinimg.com/564x/d6/09/d6/d609d64961cb515a2e8e6ada8e8bc762.jpg" class="img-responsive img-rounded" alt="User image">
          </div><!-- /.col-xs-12 -->
  <!-- User Information -->
          <div class="col-xs-12 col-md-5 col-lg-5">  
            <h3>Elsa  Arendelle</h3>
            <h4>Queen of Arendelle</h4>
            <div class="table-responsive">
              <table class="table table-responsive table-user-information">
                <tbody>
                  <tr>
                    <td>
                      <strong>
                        <span class="glyphicon glyphicon-home"></span>
                      </strong>
                    </td>
                    <td class="text-primary">
                      Arendelle, Norway
                    </td>
                  </tr><!--/home -->
                  <tr>
                     <td>
                      <strong>
                        <span class="glyphicon glyphicon-envelope"></span>
                      </strong>
                    </td>
                    <td class="text-primary">
                      ElsaArendelle@gmail.com
                    </td>
                  </tr><!--/email -->
                               
                </tbody>
              </table>
              </div> <!-- /.table-responsive -->
  <!-- Social Buttons -->
              <div class="button-group">
                <button class="btn">
                   <a href="#" class="social-icon si-border si-github si-border-round">
                 <i class="fa fa-github"></i></a></button>
      <button class="btn"><a href="#" class="social-icon si-border si-g-plus si-border-round">
                <i class="fa fa-google-plus"></i>             
            </a></button>
                <button class="btn"><a href="#" class="social-icon si-border si-linkedin si-border-round">
                <i class="fa fa-linkedin"></i>             
            </a></button>
        <button class="btn"><a href="#" class="social-icon si-border si-facebook si-border-round">
                <i class="fa fa-facebook"></i>             
            </a></button>
      
  </div><!-- /.button-group -->
             
          </div><!-- /.col-xs-12 -->
        </div><!-- /.row -->
      </div><!-- /.panel-body -->
 <!-- Panel-Footer -->
      <div class="panel-footer">
        <div class="pull-right">
                            <a href="#" data-original-title="Follow" data-toggle="tooltip" type="button" class="btn btn-sm btn-success"><i class="glyphicon glyphicon-heart"></i></a>
                            <a data-original-title="Message" data-toggle="tooltip" type="button" class="btn btn-sm btn-danger"><i class="glyphicon glyphicon-pencil"></i></a>
                        </div>
      </div>
    </div><!-- /.panel panel-info -->
</div><!-- /.container -->
</template>

<script>
import axios from "axios";
export default {
  name: 'userDetails',
  data() {
    return {
      Users: [],
    }
  },
  mounted() {
    axios.get('https://new-fullstack-pos-backend-api.herokuapp.com/users')
    .then((response) => {
      this.Users = response.data.results;
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
  },
}
</script>

<style scoped>
body{
  margin-top: 20px;
  font-family: Montserrat, sans-serif;
}

h4 {
  text-transform: uppercase;
}
img {
  display:block;
  margin-left: auto;
  margin-right: auto;
  height: 50%;
  width: 50%;
  margin-top: 15px;
}
.panel-footer {
  padding: 5px;
  height: 40px;
}

.container {
  max-width: 80%;
}
</style>center+

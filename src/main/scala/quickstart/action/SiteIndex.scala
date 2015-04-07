package quickstart.action

import xitrum.annotation.GET

@GET("")
class SiteIndex extends DefaultLayout {
  def execute() {
    respondView(Map("type" ->"mustache"))
  }
}
@GET("Schedule")
class Schedule extends DefaultLayout {
  def execute() {
    respondView(Map("type" ->"mustache"))
  }
}
@GET("Speaker")
class Speaker extends DefaultLayout {
  def execute() {
    respondView(Map("type" ->"mustache"))
  }
}
@GET("Contact")
class Contact extends DefaultLayout {
  def execute() {
    respondView()
  }
}